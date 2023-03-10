import { Avatar, Box, Column, Progress, Row, ScrollView, Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';
import millify from 'millify';
import { IUser } from '../data/types';
import { UserApi } from '../apis';
import UserAvatar from '../components/UserAvatar';

const AccountScreen = () => {
    const userApi = UserApi();

    const [user, setUser] = useState<IUser>();
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        setTimeout(() => {
            const [currentUser, ...otherUsers] = userApi.getAllUsers();
            setUser(currentUser);
            setUsers(otherUsers);
        }, 1000);
    }, []);

    if (!user) {
        return <Spinner />;
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Row alignItems='center' margin={4}>
                    <UserAvatar user={user} size='2xl' />
                </Row>
                <Row>
                    <Text bold style={styles.username} fontSize='4xl'>
                        {`@${user.username}`}
                    </Text>
                </Row>
                {/* this will turn into how your rating is displayed */}
                <Row>
                    <Box w='90%' maxW='400'>
                        <Progress value={4.5} mx='4' min={0} max={5} />
                    </Box>
                </Row>
                <Row marginY={4}>
                    <Column alignItems='center'>
                        <Text fontSize='2xl'>My Work</Text>
                        <Row>
                            <Text fontSize='lg' style={{ margin: 8 }}>
                                Works Read: {millify(9)}
                            </Text>
                            <Text fontSize='lg' style={{ margin: 8 }}>
                                Works Reviewed: {millify(8)}
                            </Text>
                        </Row>
                        <Row>
                            <Text fontSize='lg' style={{ margin: 8 }}>
                                Readers: {millify(9)}
                            </Text>
                            <Text fontSize='lg' style={{ margin: 8 }}>
                                Reviews: {millify(8)}
                            </Text>
                        </Row>
                    </Column>
                </Row>
                <Row marginY={4}>
                    <Column>
                        <Text style={{ alignSelf: 'center' }}>Followers: {millify(1099)}</Text>
                        <ScrollView
                            margin={4}
                            overflow='visibile'
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {users.map((u) => (
                                <UserAvatar key={`u-${u.id}`} user={u} />
                            ))}
                        </ScrollView>
                    </Column>
                </Row>
                <Row marginY={4}>
                    <Column>
                        <Text style={{ alignSelf: 'center' }}>Following: {millify(120)}</Text>
                        <ScrollView
                            margin={4}
                            overflow='visibile'
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {users.map((u) => (
                                <UserAvatar key={`u-${u.id}`} user={u} />
                            ))}
                        </ScrollView>
                    </Column>
                </Row>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // padding: 16,
        alignItems: 'center',
    },
    username: {
        margin: 8,
    },
    title: {
        fontSize: 32,
    },
});

export default AccountScreen;
