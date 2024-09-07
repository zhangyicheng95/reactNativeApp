import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '@/pages/home';
import SettingPage from '@/pages/setting';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

const Tab = createBottomTabNavigator();
const RouterScreen = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: true, }}>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: '首页',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingPage}
                options={{
                    title: '设置',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default RouterScreen;