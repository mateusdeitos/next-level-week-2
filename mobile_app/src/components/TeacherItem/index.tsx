import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
const TeacherItem: React.FC = () => {
    return (<View style={styles.container} >
        <View style={styles.profile}>
            <Image
                style={styles.avatar}
                source={{ uri: 'https://avatars2.githubusercontent.com/u/8628316?v=4' }}
            />

            <View style={styles.profileInfo}>
                <Text style={styles.name}>Mateus Deitos</Text>
                <Text style={styles.subject}>Matemática</Text>
            </View>

        </View>
        <Text style={styles.bio}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <View style={styles.footer}>
            <Text>
                Preço/hora {'  '}
                <Text style={styles.priceValue}>R$ 20,00</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    <Image source={heartOutlineIcon}/>
                </RectButton>
                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon}/>
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    </View>)
};

export default TeacherItem;