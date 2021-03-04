import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home'
import Category from '../../Screens/Category';
import Login from '../../Screens/Login';
import FeatherIcon from 'react-native-vector-icons/Feather';
import TabContent from '../TabContent';


const Tab = createBottomTabNavigator();

export default TabNavigation = ({ navigation }) => {


    return (

        <Tab.Navigator
            initialRouteName="Home"
            tabBar={TabContent}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FeatherIcon name="home" color={color} size={26} />
                    ),
                }}

            />
            <Tab.Screen
                name="Category"
                component={Category}

            />
            {/* <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color }) => (
                        <FeatherIcon name="user" color={color} size={26} />
                    ),
                }}

            /> */}
        </Tab.Navigator>
    )
}