import { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignedIn } = useContext(AuthContext)

    useEffect(() => {
        tryLocalSignedIn()
    }, [])

    return null
}

export default ResolveAuthScreen