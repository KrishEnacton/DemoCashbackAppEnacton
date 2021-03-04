import React, { useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './Navigation/AppNavigator';
import { Provider } from 'react-redux'
import store from './Redux/Store';
import SplashScreen from 'react-native-lottie-splash-screen'

export default App = () => {
    useEffect(() => {
        setTimeout(() => {

            SplashScreen.hide(); // here
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Provider store={store}>
                <SafeAreaProvider>
                    <AppNavigator></AppNavigator>
                </SafeAreaProvider>
            </Provider>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
