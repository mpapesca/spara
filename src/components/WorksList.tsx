import { Column, ScrollView, Text } from 'native-base';
import { IWork } from '../data/types';
import WorkDisplay from './WorkDisplay';

interface Props {
    title: string;
    works: IWork[];
}

const WorksList = ({ title, works }: Props) => {
    const worksDisplays = works.map((work) => <WorkDisplay key={`work-${work.id}`} work={work} />);

    return (
        <Column>
            <Text m={2} fontSize={32} color='black'>
                {title}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {worksDisplays}
            </ScrollView>
        </Column>
    );
};

export default WorksList;
