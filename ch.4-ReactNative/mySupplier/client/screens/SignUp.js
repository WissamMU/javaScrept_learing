import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from "../styles/authStyles";
import { Button, Input, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileForm from '../components/ProfileForm';

export default function HomeScreen(props) {
    const { navigation } = props;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Icon
                    raised
                    name='user'
                    type="font-awesome"
                    color="#f50"
                    size={50} />
                <Text h4>تسجيل حساب جديد</Text>
            </View>
            <KeyboardAvoidingView
                behavior='padding' enabled>
                <View style={styles.container}>
                    <ProfileForm />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

