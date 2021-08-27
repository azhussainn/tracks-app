import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
            <TouchableOpacity
                onPress={() => navigation.navigate(routeName)}
            >
                <Text style={styles.linkText}>
                    {text}
                </Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    linkText: {
        marginLeft:10,
        color: '#1c6ed9',
        marginTop: 20,
        fontSize: 16,

    }
})

export default withNavigation(NavLink)