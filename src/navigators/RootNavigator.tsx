import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import * as Application from 'expo-application';
import { SafeAreaView, Text, View } from 'react-native';
import { AccountScreen, DeskScreen, HomeScreen, LibraryScreen, SettingsScreen } from '../screens';

const { Navigator, Screen } = createDrawerNavigator();

const DrawerContent = (props) => (
    <SafeAreaView>
        <View style={{ height: '100%' }}>
            <View style={{ marginBottom: 16 }}>
                <Text style={{ fontSize: 24, margin: 8 }}>@Username</Text>
            </View>
            <View style={{ flex: 1 }}>
                <DrawerItemList {...props} />
            </View>
            <View style={{ alignItems: 'center', padding: 8 }}>
                <Text style={{ fontSize: 36 }}>Story Share</Text>
                <Text>App Version: {Application.nativeApplicationVersion}</Text>
                <Text>Build: {Application.nativeBuildVersion}</Text>
            </View>
        </View>
    </SafeAreaView>
);

const RootNavigator = () => {
    return (
        <Navigator
            initialRouteName='home'
            screenOptions={{
                drawerType: 'front',
            }}
            drawerContent={DrawerContent}
        >
            <Screen
                name='Home'
                component={HomeScreen}
                options={{
                    drawerIcon: ({ focused, size, color }) => (
                        <Icon name='home' size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name='Library'
                component={LibraryScreen}
                options={{
                    drawerIcon: ({ focused, size, color }) => (
                        <Icon name='book-open' size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name='Desk'
                component={DeskScreen}
                options={{
                    drawerIcon: ({ focused, size, color }) => (
                        <Icon name='desk' size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name='Account'
                component={AccountScreen}
                options={{
                    drawerIcon: ({ focused, size, color }) => (
                        <Icon name='account' size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ focused, size, color }) => (
                        <Icon name='cog' size={size} color={color} />
                    ),
                }}
            />
        </Navigator>
    );
};

export default RootNavigator;
