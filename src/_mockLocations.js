import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001

const getLocation = increment => {
    let value = increment * tenMetersWithDegrees
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitude: 5,
            altitude: 1550.45069316114,
            altitudeAccuracy: 5,
            longitude: 74.7257601 + value,
            latitude: 34.1179913 + value
        }
    }
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
      watchId: Location._getCurrentWatchId(),
      location: getLocation(counter)
    });
    counter++;
  }, 1000);