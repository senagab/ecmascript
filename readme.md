# ES6

## Instalação Babel 

```npm install --save-dev @babel/core @babel/cli```


## Setup Babel

```
  "scripts": {
    "build": "babel src -d dist"
  },
```
> Lembrar de criar uma ./src para a ```build``` funcionar

## Instalação Preset 

```npm install --save-dev @babel/preset-env```

## Configuração Preset

Criar novo arquivo _babel.config.js_ na raiz.

Dentro de _babel.config.js_:

```
{
    "presets": ["@babel/preset-env"]
}
```
__package.json__: adicionar configuração de ```browserslist``` antes de ```dependencies```.

```
  "browserslist": "> 0.25%",
  "devDependencies": {
    "@babel/cli": "^7.25.9",
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0"
  }
```

## Testing

<sup>crie um arquivo js em src<sup>


```npm run build```

e

```node .\dist\teste.js```





