import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { User, Work } from '../data/types';
import { UserService, WorkService } from '../services';

const HomeScreen = () => {
    const userService = UserService();
    const workService = WorkService();

    const [users, setUsers] = useState<User[]>([]);
    const [currentUser, setCurrentUser] = useState<User>();
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        setUsers(userService.getAllUsers());
        setWorks(workService.getAllWorks());
        setCurrentUser(userService.getUser(1));
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <Text>Users: {users.length}</Text>
                <Text>Works: {works.length}</Text>
                <Text>User: {JSON.stringify(currentUser)}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
});

export default HomeScreen;
