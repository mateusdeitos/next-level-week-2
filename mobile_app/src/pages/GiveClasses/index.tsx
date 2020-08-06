import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import bgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={bgImage}
                style={styles.content}
                resizeMode="contain">
                <Text style={styles.title}>Quer ser um Proffys?</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor em nossa plataforma web.
            </Text>
            </ImageBackground>
            <RectButton style={styles.okButton} onPress={() => navigation.goBack()}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;