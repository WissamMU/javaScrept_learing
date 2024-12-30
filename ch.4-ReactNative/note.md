# React Native

## React vs. React Native

| Feature         | React                                                           | React Native                                                |
| --------------- | --------------------------------------------------------------- | ----------------------------------------------------------- |
| **Focus**       | Building user interfaces for **web applications**               | Building **native mobile applications** for iOS and Android |
| **Rendering**   | Components within a web browser using HTML, CSS, and JavaScript | Components using native platform APIs                       |
| **Examples**    | Websites, web apps, single-page applications (SPAs)             | Mobile apps like Facebook, Instagram, and Discord           |
| **Platform**    | Web browsers                                                    | Mobile devices (iOS, Android)                               |
| **Performance** | Renders to browser's DOM                                        | Leverages native components for often better performance    |

**In essence:**

- **React** is for building web applications.
- **React Native** is for building mobile applications using React-like syntax and components.

## Expo: Simplifying React Native Development

Expo streamlines the React Native development experience by providing a comprehensive set of tools and services that make it easier to build, test, and deploy high-quality mobile applications.

- **Simplified Development:** Expo provides a powerful set of tools and services that streamline the development process for React Native apps.
- **Cross-Platform Development:** Write your code once and deploy it to both iOS and Android devices with minimal modifications.
- **Fast Iteration:** Expo's development server enables rapid iteration with instant updates to your app on your device as you make code changes.
- **Over-the-Air Updates (OTA):** Easily deploy updates to your users without requiring them to go through the app store.
- **Built-in Services:** Access a wide range of built-in services, including push notifications, authentication, file system access, and more.

## Getting Started

creating new app with

1. **npx create-expo-app myAppName --template blank@50** - version after 50 use typescript
2. cd fileName
3. npx expo start

## React Native Element

**Text**: the only element for text
**View**: It's the basic building block for creating the layout of your React Native app.
**Button** It's like a clickable button on a webpage, allowing users to trigger actions within your app.
cannot be styled with a normal style because every platform have it own role about styling but we can use other element for buttons
**Touchable**: components are essential for creating interactive elements in your React Native apps, allowing users to interact with your UI through touch gestures.
Common Touchable Components:

- TouchableOpacity: Reduces the opacity of the element when pressed.
- TouchableHighlight: Highlights the element when pressed.
- TouchableWithoutFeedback: Handles touch events without any default visual feedback.
- TouchableNativeFeedback: Provides platform-specific feedback (e.g., ripples on Android).

**TextInput**: component in React Native lets users enter text. It's like a text box or input field, essential for creating forms and collecting user input in your mobile apps.
**Image**: displays images within your app.

```js
<Image source={{ uri: "https://example.com/image.jpg" }} style={styles.image} />
```
**ScrollView**: component provides a smooth and intuitive scrolling experience for users within your React Native applications
## React Native Style

StyleSheet is the element used to style app and we can use it like this:

1. using the element tag
2. tag style.TagName

```js
   <View style={alignItems: 'center'}>
   <Text style={styles.text}>Hello, React Native!</Text>
   </View>

   const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
```
