## Repositório de estudos sobre testes


Instalação necessárias para testes:

```
npm i jest @testing-library/react @testing-library/user-event @testing-library/jest-dom jest-environment-jsdom
```

## Configurar Jest e Testing Library no projeto

### JavaScript
* Instalar `@babel/preset-env` e `@babel/preset-react`

    ```
    npm i @babel/preset-env @babel/preset-react -D
    ```

* Criar arquivo `.babelrc` e configurar presets

```
// .babelrc
{
  "presets": [
    ["@babel/preset-env"],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

* Configurar Jest para testar o DOM

```
// jest.config.json

{
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/.jest/setup.js"]
}
```

jsdom and the jest-environment-jsdom package simulate a DOM environment as if you were in the browser. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!




Documentações:
* [testEnvironment](https://jestjs.io/docs/next/configuration#testenvironment-string)
* [setupFilesAfterEnv](https://jestjs.io/docs/next/configuration#setupfilesafterenv-array)

* [Babel preset env](https://babeljs.io/docs/en/babel-preset-env)
* [Babel React](https://babeljs.io/docs/en/babel-preset-react)

### TypeScript

* Instalar `ts-jest` e `@types/jest`

```
npm i ts-jest @types/jest -D
```


* Adicionar `ts-jest` ao `preset` do `jest.config.json`

    
```
// jest.config.json

  {
    "preset": "ts-jest",
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/.jest/setup.ts"]
  }
```

Documentações:

* [ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/presets)