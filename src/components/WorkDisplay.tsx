import React from 'react';
import { Box, Text } from 'native-base';
import { IWork } from '../data/types';

interface Props {
    work: IWork;
    width?: number;
}

const WorkDisplay = ({ work, width = 4 }: Props) => {
    const calculatedHeight = 48 * (width / 4);
    const calculatedWidth = 32 * (width / 4);
    return (
        <Box
            shadow={2}
            backgroundColor='white'
            m={2}
            height={48}
            width={32}
            rounded='md'
            justifyContent='center'
            alignItems='center'
            p={2}
        >
            <Text textAlign='center' fontSize={16}>
                {work.title}
            </Text>
        </Box>
    );
};

export default WorkDisplay;
