# QA-CHALLENGE---ZONA-E

## 📌 Descripción
Este proyecto corresponde a un **QA Challenge - ZONA E** cuyo objetivo es validar la aplicación web  
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

```
.
├── features/                # Archivos .feature (BDD en español)
├── step-definitions/        # Step Definitions
├── pageobjects/             # Page Objects (locators)
├── page-methods/            # Métodos de negocio
├── hooks/                   # Hooks Before / After
├── test-results/            # Reportes de ejecución
├── reports/                 # Reportes adicionales
├── .env.qa                  # Variables de entorno
├── cucumber.js              # Configuración de Cucumber
├── package.json
└── tsconfig.json
```

---

## 📋 Requisitos previos

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Navegador** (Chrome/Edge - Playwright lo gestiona)
- **Git**

---

## 🚀 Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/[tu-usuario]/QA-CHALLENGE---ZONA-E.git
cd QA-CHALLENGE---ZONA-E

# 2. Instalar dependencias
npm install

# 3. Verificar que Playwright esté instalado
npx playwright install
```

---

## 🧬 Configuración de variables de entorno

Crear archivo `.env.qa` en la raíz:

```env
BASE_URL=https://www.saucedemo.com
USUARIO=standard_user
PASSWORD=secret_sauce
HEADLESS=true
```

---

## ▶️ Ejecución de tests

### Ejecutar todos los tests
```bash
npm run cucumber
```

### Ejecutar tests por tags específicos
```bash
npm run cucumber -- --tags "@login"
npm run cucumber -- --tags "@carrito"
npm run cucumber -- --tags "@checkout"
```

### Ejecutar en modo headed (ver navegador)
Modificar `.env.qa`:
```env
HEADLESS=false
```

---

## 📊 Test Execution Report

El reporte se genera automáticamente en `test-results/cucumber-report.html`

**Abre el reporte:**
```bash
# En Windows
start test-results/cucumber-report.html

# En Linux/Mac
open test-results/cucumber-report.html
```

### Reports disponibles
- **HTML Report**: `test-results/cucumber-report.html`
- **JSON Report**: `test-results/cucumber-report.json`

---

## 🐛 Bugs encontrados

Durante la exploración se identificaron los siguientes bugs:

| ID | Descripción | Severidad | Estado |
|---|---|---|---|
| BUG-001 | [Descripción detallada] | Alta | Documentado |
| BUG-002 | [Descripción detallada] | Media | Documentado |
| BUG-003 | [Descripción detallada] | Baja | Documentado |

*Ver documento completo de bugs en: `docs/bugs-report.pdf`*

---

## ✅ Casos de Prueba

Se diseñaron **10 casos de prueba** para el módulo de Login:

### Casos Positivos:
1. Login exitoso con credenciales válidas
2. Navegación post-login

### Casos Negativos:
3. Login con usuario bloqueado
4. Login con contraseña incorrecta
5. Login con usuario inexistente
6. Login con campos vacíos

### Edge Cases:
7. Login con espacios en blanco
8. Verificación de mensajes de error
9. Reintentos de login
10. Validación de sesión

*Ver casos detallados en: `docs/test-cases.xlsx`*

---

## 🔐 Credenciales de prueba

Disponibles en https://www.saucedemo.com/

```
Usuario: standard_user
Contraseña: secret_sauce

Otros usuarios disponibles:
- locked_out_user (bloqueado)
- problem_user (comportamiento inconsistente)
- performance_glitch_user (carga lenta)
```

---

## 📝 Flujos automatizados

### 1️⃣ Login (Login.feature)
- Login exitoso
- Login fallido
- Validación de campos requeridos

### 2️⃣ Productos (Productos.feature)
- Listar productos
- Filtrar por precio
- Ordenar alfabéticamente

### 3️⃣ Carrito (Carrito.feature)
- Agregar productos al carrito
- Remover productos del carrito
- Validar totales

### 4️⃣ Checkout (Checkout.feature)
- Información de envío
- Revisión de orden
- Confirmación de compra

---

## 🛠 Stack tecnológico

| Herramienta | Versión | Propósito |
|---|---|---|
| Playwright | 1.56.1 | Automatización de navegador |
| Cucumber | 10.9.0 | Framework BDD |
| TypeScript | 5.9.3 | Lenguaje de programación |
| Node.js | 18.x | Runtime |

---

## 📂 Estructura de archivos principales

```
test/
├── features/                 # Escenarios en Gherkin
│   ├── Login.feature
│   ├── Productos.feature
│   ├── Carrito.feature
│   └── Checkout.feature
├── step-definitions/         # Implementación de pasos
│   ├── loginSteps.ts
│   ├── products.steps.ts
│   ├── carrito.steps.ts
│   └── checkout.steps.ts
├── pageobjects/             # Locators y selectores
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── page-methods/            # Métodos de negocio
│   ├── LoginMethods.ts
│   ├── ProductsMethods.ts
│   ├── CartMethods.ts
│   └── CheckoutMethods.ts
└── hooks.ts                 # Setup/Teardown
```

---

## 📖 Buenas prácticas implementadas

✅ **Page Object Model (POM)**
- Separación de locators y lógica
- Fácil mantenimiento

✅ **BDD con Cucumber**
- Escenarios legibles en español
- Trazabilidad de requisitos

✅ **TypeScript**
- Tipado fuerte
- Mejor IDE support

✅ **Hooks y fixtures**
- Setup antes de tests
- Cleanup después de tests

✅ **Reportes automáticos**
- HTML y JSON
- Trazabilidad completa

---

## 🔗 Enlaces útiles

- **Aplicación testada**: https://www.saucedemo.com
- **Documentación Playwright**: https://playwright.dev
- **Documentación Cucumber**: https://cucumber.io
- **GitHub Repository**: https://github.com/[tu-usuario]/QA-CHALLENGE---ZONA-E

---

## 👤 Autor

**Gabriel Padilla**
- GitHub: [@gapadilla](https://github.com/gapadilla)

---

## 📄 Licencia

Este proyecto es parte de un QA Challenge educativo.

---

## ✨ Entregables del challenge

- ✅ Repositorio GitHub público
- ✅ README.md con instrucciones
- ✅ Tests automatizados (5+)
- ✅ Page Object Model
- ✅ Test Execution Report
- ✅ Documento de bugs
- ✅ Casos de prueba documentados
- ✅ Estrategia de testing

---

**Última actualización**: Febrero 2026
**Estado**: ✅ Completado
