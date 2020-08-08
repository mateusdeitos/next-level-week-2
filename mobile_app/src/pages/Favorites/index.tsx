import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const Favorites: React.FC = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={styles.teacherListContent} // -> Aplica a estilização ao Conteúdo do scrollview
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </ScrollView>
        </View>
    )
}

export default Favorites;