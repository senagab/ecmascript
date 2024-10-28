# EcmaScript

## Configuração

terminal: 
```npm install --save-dev @babel/core @babel/cli```

pkg.json:

```
  "scripts": {
    "build": "babel src -d dist"
  },
```
lembrar de criar uma src para funcionar

terminal: npm install --save-dev @babel/preset-env

raiz > novo arquivo "babel.config.js"

dentro de babel.config.js:

```
{
    "presets": ["@babel/preset-env"]
}
```
pkg.json: adicionar configuração de browserslist antes de dependencies

```
  "browserslist": "> 0.25%",
  "devDependencies": {
    "@babel/cli": "^7.25.9",
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0"
  }
```

para testar:

crie um arquivo js em src

terminal:

```npm run build```

e

```node .\dist\teste.js```





