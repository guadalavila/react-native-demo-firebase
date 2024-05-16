import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import useNotification from './src/hooks/useNotifications';

function App(): React.JSX.Element {
    useNotification();

    return (
        <SafeAreaView>
            <Text>Demo Push</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default App;
