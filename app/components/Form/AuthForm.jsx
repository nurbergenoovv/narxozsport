import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useAuth } from '../../Hooks/useAuth'
import User from '../../services/User'
import GreenButton from '../Buttons/GreenButton'
import BlueLinkText from '../Link/BlueLinkText'
import EmailInput from './UI/EmailInput'
import PasswordInput from './UI/PasswordInput'

export default function AuthForm({ navigation }) {
    const { isAuth, setIsAuth } = useAuth()

    const [FormData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    const emailChangeHandler = email => {
        setFormData({ ...FormData, email: email })
    }

    const passwordChangeHandler = password => {
        setFormData({ ...FormData, password: password })
    }

    const SignUpLinkHandler = () => {
        navigation.push('SignUp')
    }

	const handleSignIn = async () => {
        try {
            const response = await User.login(FormData);
            if (response.status === 200 && response.data.status === 'success') {
                AsyncStorage.setItem('token', response.data.token)
				setIsAuth(true)
            } else {
                setError(response.data.message || 'Неправильный email или пароль');
            }
        } catch (error) {
            console.error('Произошла ошибка при входе:', error);
            setError('Произошла ошибка при входе. Пожалуйста, попробуйте еще раз.');
        }
    }
	
    const ForgetPasswordLinkHandler = () => {
        navigation.push('ForgetPassword', { email: FormData.email })
    }

    return (
        <View className='bg-white p-5 rounded-xl' style={styles.container}>
            <Text className='font-semibold text-2xl text-center'>Вход</Text>
            <View style={styles.formContainer}>
                <EmailInput Email={FormData.email} onChangeEmail={emailChangeHandler} />
                <PasswordInput
                    Password={FormData.password}
                    onChangePassword={passwordChangeHandler}
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <BlueLinkText
                    align={'right'}
                    text={'Забыли пароль?'}
                    onPress={ForgetPasswordLinkHandler}
                />
                <GreenButton text={'Войти'} onPress={handleSignIn} />
                <BlueLinkText
                    align={'center'}
                    text={'Нету аккаунтта ? Регистрация'}
                    onPress={SignUpLinkHandler}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 16,
    },
    formContainer: {
        gap: 9,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
    },
})
