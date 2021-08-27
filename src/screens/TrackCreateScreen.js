import '../_mockLocations';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'; 
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {

    const { state : { recording }, addLocation } = useContext(LocationContext)

    const callback = useCallback(
        (location) => {
            addLocation(location, recording )
        }, [ recording ]
    )

    const [ err ] = useLocation( isFocused || recording, callback)

    return (
            <SafeAreaView
                forceInset={{ top:'always' }}
                style={styles.container}
            >
                <Map />
                { err ? <Text>Please enable Location Services.</Text>: null }
                <TrackForm />
            </SafeAreaView>
           )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Feather name="plus" size={24} color="black" />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 55,
    },
})

export default withNavigationFocus(TrackCreateScreen)