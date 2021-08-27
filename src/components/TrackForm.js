import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName } = useContext(LocationContext)

    const [ saveTrack ] = useSaveTrack()

    return (
        <Spacer>
            { !recording ? 
                <Input placeholder='Enter Name' 
                onChangeText={changeName}
                value={name}
                /> : null
            }
            { recording ? 
                    <Button title='Stop'
                        onPress={stopRecording}
                    />
                    : 
                    <Button 
                        title="Start Recording"
                        onPress={startRecording}
                    />
            }
            <Spacer />
            {!recording && locations.length > 0 ?
                <Button style={{ marginTop: 10 }}
                    title="Save Recording"
                    onPress={saveTrack}
                />
                : null
            }
        </Spacer>
    )
}

export default TrackForm
