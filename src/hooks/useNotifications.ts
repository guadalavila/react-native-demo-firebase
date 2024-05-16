import { useEffect } from 'react';
import { Alert } from 'react-native';

import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

function useNotification() {
    useEffect(() => {
        if (Platform.OS === 'ios') {
            requestUserPermission();
        }
        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            console.log(remoteMessage);
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        messaging()
            .getToken()
            .then((res) => {
                console.log({ res });
            });
        return unsubscribe;
    }, []);

    async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }
}

export default useNotification;
