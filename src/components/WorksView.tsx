import { Column, Row, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IWork } from '../data/types';
import WorkDisplay from './WorkDisplay';

interface Props {
  works: IWork[];
  columns?: number;
}

const WorksView = ({ works, columns = 2 }: Props) => {
    const {height, width} = useWindowDimensions();

    const worksGroup = [];
    const rowCount = Math.ceil(works.length / columns);
    for (let i = 0; i < rowCount; i++) {
        worksGroup[i] ??= [];
        for(let j = 0; (j < columns) && ((i*columns) + j < works.length); j++) {
            worksGroup[i][j] = works[(i*columns) + j];
        }
    }
    console.log({worksGroup});

    const rows = worksGroup.map((group, index) => {
        const rowIndex = `row-work-${index}`;
        return (
            <Row key={`row-${index}`} justifyContent='center'>
                { group[0] && <WorkDisplay key={`${rowIndex}-${0}`} work={group[0]}/> }
                { group[1] && <WorkDisplay key={`${rowIndex}-${1}`} work={group[1]}/> }
                { group[2] && <WorkDisplay key={`${rowIndex}-${2}`} work={group[2]}/> }
            </Row>
        )
    });

    return (
        <SafeAreaView>
            <Column>
                <ScrollView>
                    {rows}
                </ScrollView>
            </Column>
        </SafeAreaView>
    );
};

export default WorksView;