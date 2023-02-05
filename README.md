
para iniciar um projeto RN precisa rodar esse comando

```
expo init ignite-gym --npm
```

apos deve se adicionar a lib

```
npm install --save-dev babel-plugin-module-resolver
```

e pra facilitar ja substitui esses dois arquivos aqui:

tsconfig.json
```
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@dtos/*": [
        "src/dtos/*"
      ],
      "@assets/*": [
        "./src/assets/*"
      ],
      "@components/*": [
        "./src/components/*"
      ],
      "@screens/*": [
        "./src/screens/*"
      ],
      "@storage/*": [
        "./src/storage/*"
      ],
      "@utils/*": [
        "./src/utils/*"
      ],
      "@services/*": [
        "./src/services/*"
      ],
      "@hooks/*": [
        "./src/hooks/*"
      ],
      "@contexts/*": [
        "./src/contexts/*"
      ],
      "@routes/*": [
        "./src/routes/*"
      ]
    }
  }
}

```
babel.config.js

```
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@dtos': './src/dtos',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@routes': './src/routes'
          }
        },
      ],
    ],
  };
};


```

### comando para rodar a aplicação
adicionar no package.json
```
"start:wsl": "REACT_NATIVE_PACKAGER_HOSTNAME=$(netsh.exe interface ip show address 'Ethernet' | grep 'IP Address' | sed -r 's/^.*IP Address:\\W*//') expo start",
```
rodar a aplicação usando

```
npm run wsl:start
```

### instalando o native-base

https://docs.nativebase.io/install-expo


### instalando o react-native-svg-transform

```
npm i react-native-svg-transformer --save-dev
```

precisa criar o arquivo metro.config.js
https://github.com/kristerkari/react-native-svg-transformer


### instalando o react-navigation

precisa instalar ele pra pode fazer as navegaçoes entre as telas

precisa instalar esses dois comandos aqui 

```
  npm install @react-navigation/native

  npx expo install react-native-screens react-native-safe-area-context
```
e apos precisa instalar o stack navigation que a forma de navegação que iremos usar agora

```
npm install @react-navigation/native-stack
```