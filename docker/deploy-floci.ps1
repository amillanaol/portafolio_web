$ErrorActionPreference = 'Stop'
$endpoint = 'http://localhost:4566'
$bucket = 'landing-page'
$env:AWS_ENDPOINT_URL = $endpoint
$env:AWS_DEFAULT_REGION = 'us-east-1'
$env:AWS_ACCESS_KEY_ID = 'test'
$env:AWS_SECRET_ACCESS_KEY = 'test'

# baseURL para Floci S3 (coincide con nombre del bucket)
$env:BASE_URL = '/landing-page/'

$health = $null
try { $health = Invoke-RestMethod "$endpoint/_localstack/health" -TimeoutSec 5 } catch {}
if (-not $health) { Write-Host "Floci no responde, ejecuta: docker compose -f docker/docker-compose.floci.yml up -d"; exit 1 }
Write-Host "[OK] Floci disponible"

$exists = aws s3api head-bucket --bucket $bucket --endpoint-url $endpoint 2>$null
if (-not $exists) {
  Write-Host "[...] Creando bucket $bucket"
  aws s3api create-bucket --bucket $bucket --endpoint-url $endpoint --region us-east-1 | Out-Null
}

Write-Host "[...] Configurando website hosting"
aws s3 website "s3://$bucket/" --index-document index.html --error-document 404.html --endpoint-url $endpoint

Write-Host "[...] Configurando bucket policy pública"
$policy = @{Version="2012-10-17";Statement=@(@{Effect="Allow";Principal="*";Action="s3:GetObject";Resource="arn:aws:s3:::$bucket/*"})} | ConvertTo-Json -Compress
aws s3api put-bucket-policy --bucket $bucket --policy $policy --endpoint-url $endpoint

Write-Host "[...] Sincronizando .output/public/"
aws s3 sync .output/public/ "s3://$bucket/" --endpoint-url $endpoint --delete

$url = "$endpoint/$bucket/"
Write-Host "[OK] Deployado en: $url"
try {
  $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 5
  Write-Host "[OK] Responde con status $($r.StatusCode)"
} catch {
  Write-Host "[ERROR] No responde: $($_.Exception.Message)"
  exit 1
}
