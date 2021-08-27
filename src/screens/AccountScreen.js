import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { Feather } from '@expo/vector-icons'; 

const AccountScreen = () => {

    const  {  signout } = useContext(AuthContext)

    return (
        <SafeAreaView
            forceInset={{ top:'always' }}
            style={styles.container}
        >
            <Spacer>
                <Button 
                    title='Sign Out'
                    onPress={signout}    
                />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: "Account",
    tabBarIcon: <Feather name="settings" size={24} color="black" />
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    heading: {
        marginBottom: 50
    }
})

export default AccountScreen