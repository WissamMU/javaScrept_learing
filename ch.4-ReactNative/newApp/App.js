import { StatusBar } from 'expo-status-bar';
import {Text, View , Button } from 'react-native';
import styles from "./style"
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.secendView}>
      <Text>This is new line</Text>
      </View>
      <Button
      title='ImButton'
      onPress={() => alert('sup dude')}
      >
        Click Me
      </Button>
    </View>
  );
}

