import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild"; 
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)], }));
      return config;
    },
    baseUrl: "https://api.thedogapi.com/v1",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.ts",
    video: true,
    reporter: "mocha-allure-reporter",
    reporterOptions: {
      resultsDir: "allure-results",
    },
    env: {
      stepDefinitions: "cypress/e2e/stepDefinitions/*.ts",
      allure: true,
      allureResultsPath: "allure-results",
    },
  },
});
