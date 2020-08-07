import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import bgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

const TeacherList: React.FC = () => {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <PageHeader title="Proffys Disponíveis" />
    </View>
    )
}

export default TeacherList;