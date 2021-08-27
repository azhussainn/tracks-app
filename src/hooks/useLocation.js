import { useState, useEffect } from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default ( shouldTrack, callback ) => {
    const [ err, setErr ] = useState(null)

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {

            let { status } = await requestForegroundPermissionsAsync()
            if(status !== 'granted') {
                setErr(true)
                return 
            }
            setErr(false)
            subscriber = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, 
                callback
            )          
        }

        if(shouldTrack){
            startWatching()
        }else{
            if(subscriber){
                subscriber.remove()
            }
            subscriber = null
        }

        return () => {
            if(subscriber){
                subscriber.remove()
            }
        }

    }, [ shouldTrack, callback, ])

    return [ err ]
}