module.exports = {
  default: {
    requireModule: [
      "ts-node/register"               // Permite ejecutar .ts sin compilar
    ],

    require: [
      "test/hooks.ts",                 // Tus hooks globales
      "test/step-definitions/*.ts"     // Tus steps
    ],

    paths: [
      "test/features/*.feature"        // Tus features
    ],

    tags: process.env.npm_config_TAGS || "",  // Permite usar --tags desde npm

    format: [
      "progress",                                      // consola
      "html:test-results/cucumber-report.html",        // reporte HTML
      "json:test-results/cucumber-report.json"         // reporte JSON
    ],
    parallel: 1,                        
  }
};
