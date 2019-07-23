# React Native Scaffold Guide

### Install react native cli

```
npm install -g react-native-cli
```

### Create new application

```
react-native init AwesomeProject
```

### remove node_modules and npm install (I got into problem, so this will remove error)

```
rm -rf node_modules
npm install
```

### Install cocoapods dependencies

```
cd ios
pod install
```

### Open project on xcode

```
ios/{your_project_file}.xcworkspace
```

### Steps on installing new library

 - Terminate xcode
 - Terminate terminal process

```
npm install --save the-new-library
cd ios
pod install
```
