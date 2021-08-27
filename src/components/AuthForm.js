import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, btnTitle }) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ disableBtn, setDisableBtn ] = useState(false)

    useEffect(() => {
        if(disableBtn){
            let timer = setTimeout(function(){ setDisableBtn(false) }, 1200);
            return () => clearTimeout(timer);
        }
    }, [disableBtn])

    return (
        <>
            <Text h3 style={styles.heading}>{headerText}</Text>
            <Input 
                label='Email' 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>: null}
            <View style={styles.buttonContainer}>
                <Button 
                    title={btnTitle} 
                    onPress={ async () => {
                        setDisableBtn(true)
                        onSubmit({email, password})
                    }}
                    disabled={disableBtn}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginBottom: 30
    },
    buttonContainer: {
        margin: 10,
    },
    errorMessage: {
        fontSize: 18,
        color: 'red',
        marginLeft: 10,
        marginTop: -10
    },
})

export default AuthForm