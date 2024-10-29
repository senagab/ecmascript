<h1 align="center">ES6 + Babel</h1>

<p align=center>
    <img src="https://img.shields.io/badge/javascript-es6-8A2BE2" alt="ES6">
    </img> 
    <img src="https://img.shields.io/badge/npm-v10.8.1-F52E42" alt="NPM">
    </img> 
    <img src="https://img.shields.io/badge/babel-v7.26.0-orange?logo=babel" alt="Babel">
    </img> 
</p>

## <sup>Babel Instalação</sup>

```
npm install --save-dev @babel/core @babel/cli
```


## <sup>Setup</sup>

```
  "scripts": {
    "build": "babel src -d dist"
  },
```

- Crie uma ```./src``` para a ```npm run build``` funcionar.

## <sup>Preset Instalação</sup>

```
npm install --save-dev @babel/preset-env
```

## <sup>Setup</sup>

Criar novo arquivo _babel.config.js_ na raiz.

Dentro de _babel.config.js_:

```
{
    "presets": ["@babel/preset-env"]
}
```
- Adicionar configuração de ```browserslist``` antes de ```dependencies``` em __package.json__.

```
  "browserslist": "> 0.25%",
  "devDependencies": {
    "@babel/cli": "^7.25.9",
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0"
  }
```

## <sup>Build</sup>

<sup>crie um arquivo ```teste.js``` em ```./src``` e adicione ```console.log("teste")``` para validação.<sup>


```
npm run build
```

```
node .\dist\teste.js
```

## <sup>Configurações Adicionais</sup>

- Adicione a flag ```--watch``` do _@babel/cli_ para que a transpilação ocorra em tempo real, livrando a redundancia de rodar o _babel_  com ```npm run build``` a cada alteração de código.

```
{
   "scripts": {
      "build": "babel src --watch -d dist"
    }
}
```
