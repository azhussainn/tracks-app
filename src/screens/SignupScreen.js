import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';

const SignupScreen = () => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext)

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
                            headerText='Sign Up For Tracker'
                            errorMessage={state.errorMessage}
                            btnTitle='Sign up'
                            onSubmit={signup}
                        />
                        <Navlink 
                            text='Already have an account? Sign in instead.'
                            routeName='Signin'
                        />
                    </Spacer>
            </KeyboardAvoidingView>
           </ScrollView>
           )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen