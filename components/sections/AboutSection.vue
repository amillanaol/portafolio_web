<script setup lang="ts">
const { about } = useAbout()
</script>

<template>
  <AppSection id="sobre-mi" title="Sobre Mí">
    <div class="max-w-4xl mx-auto">
      <p class="text-gray-300 text-lg leading-relaxed mb-10 text-center">
        {{ about.summary.split('\n\n')[0] }}
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Stack principal</h3>
          <ul class="text-gray-400 space-y-2">
            <li>• Lenguajes: Java, Python, PHP, C#, JavaScript</li>
            <li>• Frameworks: Spring Boot, NestJS, FastAPI, Laravel, .NET Core, React, Next.js</li>
            <li>• DevOps / Cloud: Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, GCP</li>
            <li>• Bases de datos: MySQL, PostgreSQL, MongoDB, Redis</li>
            <li>• Herramientas: Git, Jira, ServiceNow, Active Directory</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold text-white mb-4">Aporte profesional</h3>
          <ul class="text-gray-400 space-y-2">
            <li>• Diseño y desarrollo con arquitectura limpia, DDD y principios SOLID</li>
            <li>• Construcción y mantenimiento de microservicios y APIs</li>
            <li>• Implementación de pipelines CI/CD y despliegues contenedorizados (AWS, Coolify, Jenkins)</li>
            <li>• Trabajo colaborativo en entornos ágiles (Scrum, Kanban, Jira)</li>
            <li>• Soporte técnico N2 y documentación de procesos TI</li>
          </ul>
        </div>
      </div>
    </div>
  </AppSection>
</template>
