## Repositório de estudos sobre testes


Instalação necessárias e configuração geral para testes:

  ```
  npm i jest @testing-library/react @testing-library/user-event @testing-library/jest-dom jest-environment-jsdom
  ```

* Criar arquivo de setup para importação do `jest-dom` em `./jest/setup.js` ou `./jest/setup.ts`

  ```js
  // setup.js ou setup.ts
  import "@testing-library/jest-dom"
  ```


* Definir environment como `jsdom` no `jest.config.json`


  ```json

  {
      "testEnvironment": "jsdom",
      "setupFilesAfterEnv": ["<rootDir>/.jest/setup.js"]
  }
  ```

Documentações:
* [testEnvironment](https://jestjs.io/docs/next/configuration#testenvironment-string)
* [setupFilesAfterEnv](https://jestjs.io/docs/next/configuration#setupfilesafterenv-array)

* [DOM Manipulation](https://jestjs.io/docs/next/tutorial-jquery)
* [jsdom](https://github.com/jsdom/jsdom)


## Configurar Jest e Testing Library no projeto

### JavaScript
* Instalar `@babel/preset-env` e `@babel/preset-react`

    ```
    npm i @babel/preset-env @babel/preset-react -D
    ```

* Criar arquivo `.babelrc` e configurar presets

  ```json
  {
    "presets": [
      ["@babel/preset-env"],
      ["@babel/preset-react", { "runtime": "automatic" }]
    ]
  }
  ```

Documentações:

* [Babel preset env](https://babeljs.io/docs/en/babel-preset-env)
* [Babel React](https://babeljs.io/docs/en/babel-preset-react)

### TypeScript

* Instalar `ts-jest` e `@types/jest`

  ```
  npm i ts-jest @types/jest -D
  ```


* Adicionar `ts-jest` ao `preset` do `jest.config.json`

    
  ```json

    {
      "preset": "ts-jest",
      "testEnvironment": "jsdom",
      "setupFilesAfterEnv": ["<rootDir>/.jest/setup.ts"]
    }
  ```

* Adicionar `./jest/setup.ts` ao `tsconfig.json`

  ```json
  "include": ["src", "./.jest/setup.ts"]
  ```

Documentações:

* [ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/presets)