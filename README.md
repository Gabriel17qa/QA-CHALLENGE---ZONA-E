# QA Challenge – SauceDemo Automation

## 📌 Descripción
Este proyecto corresponde a un **QA Challenge** cuyo objetivo es validar la aplicación web  
https://www.saucedemo.com mediante **testing manual y automatizado**.

Se implementó una solución de **automatización E2E** utilizando:
- Playwright
- Cucumber (BDD)
- TypeScript
- Page Object Model (POM)

El enfoque está orientado a buenas prácticas, mantenibilidad y claridad, simulando un proyecto real.

---

## 🧪 Alcance del testing

### ✔ Testing Manual
- Exploración de la aplicación
- Identificación y documentación de bugs
- Diseño de casos de prueba para el módulo de Login

### ✔ Testing Automatizado
Se automatizaron flujos críticos E2E:
- Login exitoso y fallido
- Gestión de productos
- Gestión de carrito
- Proceso completo de checkout

---

## 🏗 Arquitectura del proyecto

```text
.
├── features/                # Archivos .feature (BDD en español)
├── step-definitions/        # Step Definitions
├── pageobjects/             # Page Objects (locators)
├── methods/                 # Métodos de negocio
├── hooks/                   # Hooks Before / After
├── reports/                 # Reportes de ejecución
├── .env.qa                  # Variables de entorno
├── cucumber.js              # Configuración de Cucumber
├── package.json
└── tsconfig.json
