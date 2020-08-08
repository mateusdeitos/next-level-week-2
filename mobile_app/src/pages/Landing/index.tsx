import React, { useCallback, useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import heartIcon from '../../assets/images/icons/heart.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const Landing: React.FC = () => {
    const [totalConnections, setTotalConnections] = useState(0);
    const { navigate } = useNavigation();

    useEffect(() => {
        api.get('/connections').then((response) => {
            const { total } = response.data;
            setTotalConnections(total);
        });
    }, [])

    const handleNavigateToGiveClassesPage = useCallback(() => {
        navigate('GiveClasses');
    }, []);
    const handleNavigateToStudyPages = useCallback(() => {
        navigate('Study');
    }, []);
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}

                {/* Importante, esse 2º elemento Text irá herdar as estilizações 
            do styles.title, pois ele está dentro do 1ª Text */}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {'\t'}
                <Image source={heartIcon} />
            </Text>
        </View>)
}

export default Landing;