import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import styles from '../styles/authStyles';
import { Formik } from 'formik';
import { Button, Input, Icon, Text } from 'react-native-elements';
import * as yup from 'yup';
import { useState } from 'react';
import axios from '../config/axios'
import { SIGNIN_URL } from '../config/urls';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
// That command installs the @react-native-async-storage/async-storage package. This package is used for persistent,
// asynchronous storage in React Native apps  It lets you save and retrieve key-value pairs locally on the user's device.
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignInScreen(props) {

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false)
    const [alert, setAlert] = useState({
        title: '',
        message: '',
        type: ''
    })

    const signInValidationSchema = yup.object().shape({
        email: yup // Yup for data validation
            .string()
            .email("يجب إدخال بريد إلكتروني صحيح")
            .required('البريد الإلكتروني مطلوب'),
        password: yup
            .string()
            .required('يجب عليك إدخال كلمة مرور صالحة'),
    });

    const _signIn = async (values) => {
        // asunc function to Sign in user with the provided email and password.

        setLoading(true); // Show loading indicator while signing in.

        const body = {
            email: values.email,
            password: values.password,
        };

        try {
            // Make a POST request to the sign in API with the provided email and password.
            const response = await axios.post(SIGNIN_URL, body);

            // Sign in successful
            await AsyncStorage.setItem("accessToken", response.data.accessToken); // Store access token for future requests.
            setLoading(false); // Hide loading indicator.
            props.navigation.navigate("Home"); // Navigate to the Home screen after successful sign in.
        } catch (error) {
            // Sign in failed
            console.error(error); // Log the error for debugging purposes.
            setLoading(false); // Hide loading indicator.

            // Display an alert message to the user indicating the sign in failure.
            setAlert({
                title: "تنبيه", // Alert title in Arabic (meaning "Alert").
                message: error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول", // Error message.
                type: "alert",
            });
            setVisible(true); // Show the alert message.
        }
    };
    return (
        // Use ScrollView to enable scrolling if the form content exceeds the screen height.
        <ScrollView>
            <Loader loading={loading} title="جاري تسجيل الدخول" />
            <Alert visible={visible} title={alert.title} message={alert.message} type={alert.type} onClose={() => setVisible(false)} />
            <View style={styles.container}>
                <Icon
                    raised
                    name="user"
                    type="font-awesome"
                    color="#f50"
                    size={50}
                />
                <Text h4>تسجيل الدخول</Text>
            </View>
            <KeyboardAvoidingView behavior="padding" enabled>
                {/* Use KeyboardAvoidingView to prevent the keyboard from overlapping form inputs. */}
                <View style={styles.container}>
                    <Formik
                        // Use Formik to manage the form state and handle user input.
                        initialValues={{ email: '', password: '' }} // Initialize the form with empty values for email and password.
                        validationSchema={signInValidationSchema} // Define a validation schema to ensure data integrity.
                        onSubmit={values => _signIn(values)} // Handle form submission. 
                    // 'values' is an object containing the entered values for each field.
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                            <>
                                <Input
                                    name="email"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder='البريد الإلكتروني'
                                    style={[styles.textInput, errors.email && styles.errorInput]}
                                    keyboardType='email-addres'
                                />
                                {errors.email &&
                                    <Text p style={styles.textError}>{errors.email}</Text>
                                }
                                <Input
                                    name="password"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry
                                    placeholder="كلمة المرور"
                                    style={[styles.textInput, errors.password && styles.errorInput]}
                                />
                                {errors.password &&
                                    <Text p style={styles.textError}>{errors.password}</Text>
                                }
                                <Button title="دخول" style={{ marginTop: '20px' }} onPress={handleSubmit} disabled={!isValid} />
                            </>
                        )}
                    </Formik>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}