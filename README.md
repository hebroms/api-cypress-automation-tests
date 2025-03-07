# 🚀 Cypress + Cucumber + Allure API Testing

Este projeto automatiza testes de API usando **Cypress**, **Cucumber** e gera relatórios com **Allure**.

---

## 📌 Pré-requisitos

Antes de começar, instale os seguintes softwares:

- [Node.js (LTS)](https://nodejs.org/)
- [Java (necessário para Allure Reports)](https://www.java.com/)
- [Allure Commandline](https://docs.qameta.io/allure/)

## 🔹 Instalando o Allure
Caso não tenha o **Allure** instalado, rode o seguinte comando:

```sh
npm install -g allure-commandline
```

🔹 Para verificar a instalação:
```sh
allure --version
```
## 📌 Como Instalar o Projeto

1️⃣ Clone o repositório:
```sh
git clone https://github.com/hebroms/api-cypress-automation-tests.git
```
```sh
cd seu-repositorio
```
2️⃣ Instale as dependências:
```sh
npm install
```
## 📌 Como Rodar os Testes
🔹 Executar no modo interativo (GUI do Cypress)
```sh
npx cypress open
```
🔹 Executar no modo Headless
```sh
npx cypress run --headless
```
🔹 Executar no Chrome Headless
```sh
npx cypress run --browser chrome --headless
```
## 📌 Como Gerar Relatórios Allure

1️⃣ Rodar os testes para gerar os arquivos de resultados:
```sh
npx cypress run --headless
```
2️⃣ Gerar o relatório Allure:
```sh
npx allure generate --clean
```
3️⃣ Abrir o relatório Allure no navegador:
```sh
npx allure open
```
## 📌 Estrutura do Projeto
```sh
cypress/
│── e2e/
│   ├── features/
│   │   ├── exemplo.feature         # Cenários de teste em Gherkin
│   ├── stepDefinitions/
│   │   ├── exemplo.steps.ts        # Implementação dos steps do Cucumber
│   ├── requests/
│   │   ├── exemploRequests.ts      # Modelos de Requests
│   ├── responses/
│   │   ├── exemploResponse.ts      # Modelos de Responses
│── support/
│   ├── commands.ts                 # Comandos customizados do Cypress
│   ├── e2e.ts                      # Configuração global dos testes
│── cypress.config.ts               # Configuração do Cypress
│── package.json                    # Dependências do projeto
│── README.md                       # Documentação
│── .gitignore                      # Arquivos ignorados no Git
```
## 📌 Tecnologias Utilizadas

    Cypress - Framework de testes automatizados.
    Cucumber - Suporte a Gherkin para BDD.
    Allure Reports - Geração de relatórios detalhados.