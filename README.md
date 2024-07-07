
# React Native PhonePe Intigration 

This React Native application integrates the PhonePe payment gateway, enabling secure and convenient transactions directly within the app. Users can seamlessly make payments, transfer funds, and complete transactions using their preferred payment methods supported by PhonePe's robust API integration. The app provides a user-friendly interface that ensures a smooth payment experience while prioritizing security and reliability. Simplify financial transactions with our app, backed by PhonePe, for an efficient and secure mobile payment solution.


## Authors

- [Jayanta Mahato](https://github.com/jayantamahato)


## Features

- input amount
- make payment



## Package Installation

Install PhonePe PG Package

```bash
  npm i https://phonepe.mycloudrepo.io/public/repositories/phonepe-mobile-react-native-sdk/releases/v2/react-native-phonepe-pg.tgz
```
Add the below code to ‘repositories’ section of your project level build.gradle file - [code](https://github.com/jayantamahato/PhonePePGReactNative/commit/7d399e9ed22a806c6d52ee59b1804e592b8f3443)

```bash
allprojects {
    repositories {
        maven {
            url  "https://phonepe.mycloudrepo.io/public/repositories/phonepe-intentsdk-android"
       }
   }
}
```

Install sha256 Package - [link](https://www.npmjs.com/package/react-native-sha256)

```bash
npm i react-native-sha256
```
    
Install Base64 Package - [link](https://www.npmjs.com/package/base-64)

```bash
npm i base-64
```
## Roadmap

- phonePe funtions - [commit](https://github.com/jayantamahato/PhonePePGReactNative/commit/0994628bbc7a82d708c5943a3a22cdd77ed17825)

- call funtions - [commit](https://github.com/jayantamahato/PhonePePGReactNative/commit/b04196712e19e8e765e4c7f0d4dfcc950acdd2d7)

## Screenshots

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-08-21_7fc543eb474dc6b9b5ba7ae40a9724d1.jpg?updatedAt=1720375834450&tr=w-310%2Ch-200%2Cfo-auto)

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-20-33_7fc543eb474dc6b9b5ba7ae40a9724d1.jpg?updatedAt=1720375834550&tr=w-310%2Ch-700%2Cfo-auto)

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-30-02_7fc543eb474dc6b9b5ba7ae40a9724d1.jpg?updatedAt=1720375834548&tr=w-310%2Ch-700%2Cfo-auto)

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-34-27_73807bab6145e2fa1235865f09fbddb6.jpg?updatedAt=1720375834521&tr=w-310%2Ch-700%2Cfo-auto)

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-40-80_73807bab6145e2fa1235865f09fbddb6.jpg?updatedAt=1720375834589&tr=w-310%2Ch-700%2Cfo-auto)

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-43-91_73807bab6145e2fa1235865f09fbddb6.jpg?updatedAt=1720375834486&tr=w-310%2Ch-700%2Cfo-auto)

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-49-64_73807bab6145e2fa1235865f09fbddb6.jpg?updatedAt=1720375834592&tr=w-310%2Ch-700%2Cfo-auto)

![App Screenshot](https://ik.imagekit.io/gvspmkmsw/personal/phonePePGReactNative/Screenshot_2024-07-07-23-37-52-00_7fc543eb474dc6b9b5ba7ae40a9724d1.jpg?updatedAt=1720375834409&tr=w-310%2Ch-700%2Cfo-auto)
