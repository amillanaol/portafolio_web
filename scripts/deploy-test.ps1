[CmdletBinding()]
param(
  [string]$S3Endpoint = 'http://localhost:4566',
  [string]$S3Bucket = 'landing-page',
  [string]$BaseUrl = '/landing-page/',
  [string]$TestUrl = 'http://localhost:4566/landing-page/index.html',
  [switch]$SkipDeploy,
  [switch]$SkipTest
)

$ErrorActionPreference = 'Continue'
$start = Get-Date

Write-Host "=== DEPLOY & TEST PIPELINE ===" -ForegroundColor Cyan
Write-Host "Started: $($start.ToString('HH:mm:ss'))`n" -ForegroundColor Gray

# 1. CLEAN
Write-Host "[1/4] Cleaning build artifacts..." -ForegroundColor Yellow
Remove-Item -Recurse -Force '.nuxt', '.output' -ErrorAction SilentlyContinue
Write-Host "  OK`n" -ForegroundColor Green

# 2. BUILD
Write-Host "[2/4] Building (npm run generate)..." -ForegroundColor Yellow
$env:BASE_URL = $BaseUrl
$global:LASTEXITCODE = 0
npm run generate
if ($global:LASTEXITCODE -ne 0) {
  Write-Host "BUILD FAILED (exit code: $global:LASTEXITCODE)" -ForegroundColor Red
  exit 1
}

# Validate y repara index.html si el prerender falló (bug ESM Windows)
$outDir = Join-Path '.output' 'public'
$indexHtml = Join-Path $outDir 'index.html'
$htmlOk = $true

if (Test-Path $indexHtml) {
  $htmlLen = (Get-Content $indexHtml -Raw).Length
  Write-Host "  index.html: $htmlLen bytes" -ForegroundColor Gray
  if ($htmlLen -lt 500) {
    Write-Host "  WARNING: prerender vacío ($htmlLen bytes) - reparando SPA shell..." -ForegroundColor Yellow
    $htmlOk = $false
  }
} else {
  Write-Host "  WARNING: index.html no encontrado - generando SPA shell..." -ForegroundColor Yellow
  $htmlOk = $false
}

if (-not $htmlOk) {
  # Escanear chunks generados por Vite para construir SPA shell
  $nuxtDir = Join-Path $outDir '_nuxt'
  $entryCss = @(Get-ChildItem -LiteralPath $nuxtDir -Filter 'entry.*.css' -Name)
  $allJs = Get-ChildItem -LiteralPath $nuxtDir -Filter '*.js' | Where-Object { $_.Length -gt 5000 } | Sort-Object Length -Descending
  $entryJs = $allJs | Select-Object -First 1 -ExpandProperty Name

  if (-not $entryCss -or -not $entryJs) {
    Write-Host "  ERROR: no se encontraron chunks en $nuxtDir" -ForegroundColor Red
    exit 1
  }

  Write-Host "  Entry CSS: $entryCss" -ForegroundColor Gray
  Write-Host "  Entry JS:  $entryJs" -ForegroundColor Gray

  $title = "Alexis Millanao | Desarrollador Backend & Automatización"
  $desc = "Servicios de desarrollo backend, APIs REST, automatización e infraestructura DevOps. +10 años de experiencia."

  $spaHtml = @"
<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>$title</title><link rel="stylesheet" href="$BaseUrl`_nuxt/$entryCss" crossorigin><script type="module" src="$BaseUrl`_nuxt/$entryJs" crossorigin></script><meta name="description" content="$desc"><script id="unhead:payload" type="application/json">{"title":"$title"}</script></head><body><div id="__nuxt"></div><div id="teleports"></div><script>window.__NUXT__={};window.__NUXT__.config={public:{},app:{baseURL:"$BaseUrl",buildAssetsDir:"/_nuxt/",cdnURL:""}}</script></body></html>
"@

  $spaHtml = $spaHtml -replace "`r`n", "" -replace "`n", ""
  Set-Content -LiteralPath $indexHtml -Value $spaHtml -NoNewline -Encoding UTF8
  Write-Host "  SPA shell generado: $( $spaHtml.Length ) bytes`n" -ForegroundColor Green
}

Write-Host "  BUILD OK`n" -ForegroundColor Green

# 3. DEPLOY
if (-not $SkipDeploy) {
  Write-Host "[3/4] Deploying to S3 ($S3Bucket)..." -ForegroundColor Yellow
  # Verificar bucket existe antes de sync
  aws s3 ls "s3://$S3Bucket/" --endpoint-url $S3Endpoint 2>$null | Out-Null
  if ($global:LASTEXITCODE -ne 0) {
    Write-Host "  S3 BUCKET NOT FOUND - creando bucket $S3Bucket..." -ForegroundColor Yellow
    aws s3 mb "s3://$S3Bucket/" --endpoint-url $S3Endpoint 2>&1
    if ($global:LASTEXITCODE -ne 0) {
      Write-Host "  FAILED to create bucket (exit code: $global:LASTEXITCODE)" -ForegroundColor Red
      exit 1
    }
    Write-Host "  Bucket creado.`n" -ForegroundColor Green
  }
  aws s3 sync ".output/public/" "s3://$S3Bucket/" --endpoint-url $S3Endpoint --delete
  if ($global:LASTEXITCODE -ne 0) {
    Write-Host "DEPLOY FAILED (exit code: $global:LASTEXITCODE)" -ForegroundColor Red
    exit 1
  }
  Write-Host "  DEPLOY OK`n" -ForegroundColor Green
} else {
  Write-Host "[3/4] Skipping deploy (-SkipDeploy)`n" -ForegroundColor Gray
}

# 4. TEST (con reintento)
if ($SkipTest) {
  Write-Host "[4/4] Skipping tests (-SkipTest)`n" -ForegroundColor Gray
} else {
  Write-Host "[4/4] Running Playwright tests..." -ForegroundColor Yellow
$env:TEST_URL = $TestUrl
$env:PLAYWRIGHT_HEADLESS = 'true'
$testExit = 1
$testAttempts = 0
do {
  $testAttempts++
  npx playwright test --workers=1 --reporter=list
  $testExit = $global:LASTEXITCODE
  if ($testExit -ne 0 -and $testAttempts -lt 2) {
    Write-Host "  TESTS FAILED (intento $testAttempts), reintentando..." -ForegroundColor Yellow
    Start-Sleep -Seconds 2
  }
} while ($testExit -ne 0 -and $testAttempts -lt 2)

  $elapsed = [math]::Round(((Get-Date) - $start).TotalSeconds, 1)

  if ($testExit -eq 0) {
    Write-Host "`n========================================" -ForegroundColor Cyan
    Write-Host "  ALL TESTS PASSED ($elapsed s)" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Cyan
    exit 0
  } else {
    Write-Host "`n========================================" -ForegroundColor Red
    Write-Host "  TESTS FAILED after $testAttempts attempts ($elapsed s)" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    exit $testExit
  }
}
