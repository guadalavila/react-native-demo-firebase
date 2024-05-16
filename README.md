# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

## Crear proyecto de Firebase

Ingresar en la consola de firebase, agregar un nuevo proyecto.

Una vez creado el proyecto, agregar nueva app para android y para iOS.

Tener en cuenta el nombre del paquete (android) y del bundleId (iOS), debe coincidir con el del proyecto.

## Paso 1: Agregar firebase

```bash
npm install --save @react-native-firebase/app
cd ios && pod install
```

Seguir la documentación https://rnfirebase.io/

## Paso 2: Agregar Módulo de Notificaciones

```bash

npm install @react-native-firebase/messaging
cd ios/ && pod install
```

Seguir la documentación https://rnfirebase.io/messaging/usage

### Referencias

-   [Firebase RN Config](https://rnfirebase.io)
-   [Set push in iOS](https://rnfirebase.io/messaging/usage/ios-setup) - a **guided tour basics**.
-   [App Icon Generator](https://www.appicon.co/)

### Configurar icono push Notificaciones

Se puede usar [Generador Icono](https://www.appicon.co) para generar los iconos para android y para iOS.
