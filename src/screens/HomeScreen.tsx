import { Row } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView } from 'react-native';
import { WorksList } from '../components';
import {  IWork } from '../data/types';
import { WorkService } from '../services';

const HomeScreen = () => {
    const workService = WorkService();
    const [works, setWorks] = useState<IWork[]>([]);

    useEffect(() => {
        setWorks(workService.getAllWorks());
    }, []);

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
