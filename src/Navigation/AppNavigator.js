import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import TabNavigation from './TabNavigation';
import CategoryDetail from '../Screens/CategoryDetail'
import { fromLeft } from 'react-navigation-transitions';
import CardModal from '../Components/CardModal'


export default AppNavigator = () => {
    const Stack = createStackNavigator();
    const MainStack = createStackNavigator();


    return (
        <NavigationContainer>

            <MainStack.Navigator
                headerMode="none"

                screenOptions={{ gestureEnabled: true }}
                screenOptions={{
                    //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    //headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft
                    //transitionSpec: TransitionSpecs.FadeInFromBottomAndroidSpec
                }}
            >
                {/* <Stack.Screen
                    name="CardModal"
                    component={CardModal}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
                    }}
                /> */}
                <Stack.Screen
                    name="TabNavigation"
                    component={TabNavigation}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
                <Stack.Screen
                    name="CategoryDetail"
                    component={CategoryDetail}
                    options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}