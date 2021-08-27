import React, { useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationEvents} from 'react-navigation';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context as AuthContext } from '../context/AuthContext'


const SigninScreen = () => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.container}
                behavior='padding'
            >
                <NavigationEvents 
                    onWillFocus={(clearErrorMessage)}
                />
                <Spacer>
                    <AuthForm 
                            headerText='Sign In For Tracker'
                            errorMessage={state.errorMessage}
                            btnTitle='Sign in'
                            onSubmit={signin}
                    />
                    <Navlink 
                        text='Dont have an account? Sign up instead.'
                        routeName='Signup'
                    />
                </Spacer>
            </KeyboardAvoidingView>
        </ScrollView>
           )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
        marginTop: 20
    },
})

export default SigninScreen