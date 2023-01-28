
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

