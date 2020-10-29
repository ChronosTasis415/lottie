# lottie-web && lottie-player

## Project setup
```
npm install
```

## lottie-web
```
npm install lottie-web
```

## lottie-player
```
npm install @lottiefiles/lottie-player
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### path json
Lottie 支持 Jellybean (API 16) 及以上版本。Lottie 动画支持从以下位置加载动画：

src/main/res/raw 中的 json 动画。
src/main/assets 中的 json 文件。
src/main/assets 中的 zip 文件。有关详细信息，请参阅 images docs。
json 或 zip 文件的 Url。
json 字符串。源可以来自任何东西，包括自己的网络堆栈。
json 文件或 zip 文件的 InputStream。

