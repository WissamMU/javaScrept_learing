import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SupplierScreen() {
  return (
    <View style={styles.container}>
      <Text>
        Supplier Screen
      </Text>
      <Button
        title="Home Page"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
