import { Formik } from 'formik';
import * as yup from 'yup';
import styles from '../styles/authStyles'; // Import styles for the form components
import { Text, Input, CheckBox, Button } from 'react-native-elements'; // Import UI components from react-native-elements
import MapViewContainer from './MapViewComponent';

export default function ProfileForm(props) {

    // Define validation schema for form fields
    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required('اسم المستخدم مطلوب'), // Username is required
        email: yup
            .string()
            .email("يجب إدخال بريد إلكتروني صحيح") // Must be a valid email
            .required('البريد الإلكتروني مطلوب'), // Email is required
        password: yup
            .string()
            .required('يجب عليك إدخال كلمة مرور صالحة') // Password is required
            .min(5, "يجب أن تكون كلمة المرور أكثر من خمسة محارف"), // Minimum 5 characters

        // Conditionally required fields based on user type selection
        userType: yup.boolean(),
        specialization: yup.string().when('userType', {
            is: true,
            then: (schema) => schema.required("يجب عليك ادخال التخصص"), // Specialization required for suppliers
        }),
        address: yup.string().when('userType', {
            is: true,
            then: (schema) => schema.required('يجب عليك إدخال العنوان'), // Address required for suppliers
        }),
        phone: yup.string().when('userType', {
            is: true,
            then: (schema) => schema.required('يجب عليك إدخال رقم الهاتف'), // Phone number required for suppliers
        }),
        workingHours: yup.string().when('userType', {
            is: true,
            then: (schema) => schema.required('يجب عليك إدخال ساعات العمل'), // Working hours required for suppliers
        }),
    });

    return (
        <Formik  // Formik is used for managing form state, validation, and submission.
            initialValues={{
                name: props.user?.name || '',
                email: props.user?.email || '',
                password: '',
                userType: props.user?.userType == 'Supplier',
                specialization: props.user?.profile?.specialization || '',
                workingHours: props.user?.profile?.workingHours || '',
                address: props.user?.profile?.address || '',
                phone: props.user?.profile?.phone || '',
                latitude: props.user?.latitude || null,
                longitude: props.user?.longitude || null
            }}
            validationSchema={validationSchema}
            onSubmit={values => props.submit(values)}
        >
            {
                ({ handleChange, handleBlur, handleSubmit, errors, values, setFieldValue, isValid }) => (
                    <>
                        <Input
                            name="name"
                            placeholder='الاسم'
                            value={values.name}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            style={[styles.textInput, errors.name && styles.errorInput]}
                        />
                        {errors.name && <Text p style={styles.textError}>{errors.name}</Text>}
                        <Input
                            name="email"
                            onChangeText={handleChange('email')}
                            disabled={props.disabled}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            placeholder='البريد الإلكتروني'
                            style={[styles.textInput, errors.email && styles.errorInput]}
                        />
                        {errors.email && <Text p style={styles.textError}>{errors.email}</Text>}
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
                        {
                            props.checkBox &&
                            <CheckBox
                                checked={values.userType}
                                title="أنا مورد"
                                name="userType"
                                onPress={() => setFieldValue('userType', !values.userType)}
                            />
                        }

                        {values.userType && (
                            <>
                                <Input
                                    name="specialization"
                                    onChangeText={handleChange('specialization')}
                                    onBlur={handleBlur('specialization')}
                                    value={values.specialization}
                                    placeholder="التخصص"
                                    style={[styles.textInput, errors.specialization && styles.errorInput]}
                                />
                                {errors.specialization &&
                                    <Text p style={styles.textError}>{errors.specialization}</Text>
                                }
                                <Input
                                    name="workingHours"
                                    onChangeText={handleChange('workingHours')}
                                    onBlur={handleBlur('workingHours')}
                                    value={values.workingHours}
                                    placeholder="ساعات العمل"
                                    style={[styles.textInput, errors.workingHours && styles.errorInput]}
                                />
                                {errors.workingHours &&
                                    <Text p style={styles.textError}>{errors.workingHours}</Text>
                                }
                                <Input
                                    name="address"
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
                                    placeholder="العنوان"
                                    style={[styles.textInput, errors.address && styles.errorInput]}
                                />
                                {errors.address &&
                                    <Text p style={styles.textError}>{errors.address}</Text>
                                }
                                <Input
                                    name="phone"
                                    onChangeText={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    value={values.phone}
                                    placeholder="رقم الهاتف"
                                    style={[styles.textInput, errors.phone && styles.errorInput]}
                                />
                                {errors.phone &&
                                    <Text p style={styles.textError}>{errors.phone}</Text>
                                }
                                {values.latitude &&
                                    <MapViewContainer
                                        location={{ latitude: values.latitude, longitude: values.longitude }}
                                        lat={value => setFieldValue('latitude', value)}
                                        lng={value => setFieldValue('longitude', value)}
                                    />
                                }

                            </>
                        )}
                        <Button title={props.buttonTittle} style={{ marginTop: '20px' }} onPress={handleSubmit} disabled={!isValid} />
                    </>
                )
            }
        </Formik>
    )
}