import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface ITeacherProps {
    avatar: string;
    name: string;
    subject: string;
    bio: string;
    cost: number;
}

const TeacherItem: React.FC<ITeacherProps> = ({ avatar, name, subject, bio, cost }) => {


    return (<View style={styles.container} >
        <View style={styles.profile}>
            <Image
                style={styles.avatar}
                source={{ uri: avatar }}
            />

            <View style={styles.profileInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subject}>{subject}</Text>
            </View>

        </View>
        <Text style={styles.bio}>{bio}</Text>
        <View style={styles.footer}>
            <Text>
                Preço/hora {'  '}
                <Text style={styles.priceValue}>R$ {cost}</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    <Image source={heartOutlineIcon} />
                </RectButton>
                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    </View>)
};

export default TeacherItem;