import { Box, Row } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { WorkDisplay, WorksList } from '../components';
import { IUser, IWork } from '../data/types';
import { UserService, WorkService } from '../services';

const HomeScreen = () => {
    const userService = UserService();
    const workService = WorkService();

    const [users, setUsers] = useState<IUser[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser>();
    const [works, setWorks] = useState<IWork[]>([]);

    useEffect(() => {
        setUsers(userService.getAllUsers());
        setWorks(workService.getAllWorks());
        setCurrentUser(userService.getUser(1));
    }, []);

    const worksList1 = works.map((work) => <WorkDisplay key={`work-${work.id}`} work={work} />);
    const worksList2 = works.map((work) => <WorkDisplay key={`work-${work.id}`} work={work} />);
    const worksList3 = works.map((work) => <WorkDisplay key={`work-${work.id}`} work={work} />);
    const worksList4 = works.map((work) => <WorkDisplay key={`work-${work.id}`} work={work} />);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                    <Row>
                        <WorksList title='List 1' works={works} />
                    </Row>
                    <Row>
                        <WorksList title='List 2' works={works} />
                    </Row>
                    <Row>
                        <WorksList title='List 3' works={works} />
                    </Row>
                    <Row>
                        <WorksList title='List 4' works={works} />
                    </Row>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
});

export default HomeScreen;
