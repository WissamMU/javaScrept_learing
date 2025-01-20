import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button title="go to supplier" onPress={() => { navigation.navigate('Supplier') }}/>
            <Button title="sign up page" onPress={() => { navigation.navigate('SignUp') }}/>
            <Button title="sign In page" onPress={() => { navigation.navigate('SignIn') }}/>
            <Button title="Profile page" onPress={() => { navigation.navigate('Profile') }}/>
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
