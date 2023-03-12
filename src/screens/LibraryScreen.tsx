import { Column, Row, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { WorkDisplay, WorksList } from '../components';
import WorksView from '../components/WorksView';
import {  IWork } from '../data/types';
import { UserService, WorkService } from '../services';

const LibraryScreen = () => {

    const workService = WorkService();

    const [works, setWorks] = useState<IWork[]>([]);

    useEffect(() => {
        setWorks(workService.getAllWorks());
    }, []);

    return (
        <SafeAreaView>
            <Column>
                <ScrollView>
                    <WorksView works ={works} />
                </ScrollView>
            </Column>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 32,
    },
});

export default LibraryScreen;

