import React, { useCallback, useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { useSafeArea } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
interface ITeacherProps {
    id: string;
    avatar: string;
    name: string;
    subject: string;
    bio: string;
    cost: number;
    whatsapp: string;
    favorited: boolean;
}

export interface Teacher extends ITeacherProps {
}

const TeacherItem: React.FC<Teacher> = (teacher) => {

    const [isFavorited, setIsFavorited] = useState(teacher.favorited);

    const handleToggleFavorite = useCallback(async () => {

        /*
        * 1 - Busca todos favoritos do Async Storage
        * 2 - Transforma em um Array
        * 3 - Se o item for um favorito, precisa desfavoritar, então remove do array e salva no AS de novo.
        * 4 - Se o item não for favorito, favorita-o e salva o AS novamente.
        */

        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];
        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherId: string) => teacherId === teacher.id);
            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        } else {
            favoritesArray.push(teacher);

            setIsFavorited(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

    }, [isFavorited])

    const handleLinkToWhatsapp = useCallback(async () => {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
        await api.post('/connections', {
            user_id: teacher.id,
        })
    }, [teacher.whatsapp]);

    return (<View style={styles.container} >
        <View style={styles.profile}>
            <Image
                style={styles.avatar}
                source={{ uri: teacher.avatar }}
            />

            <View style={styles.profileInfo}>
                <Text style={styles.name}>{teacher.name}</Text>
                <Text style={styles.subject}>{teacher.subject}</Text>
            </View>

        </View>
        <Text style={styles.bio}>{teacher.bio}</Text>
        <View style={styles.footer}>
            <Text>
                Preço/hora {'  '}
                <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]} onPress={handleToggleFavorite}>
                    {/* Se é favorito, mostra o ícone para remover o favorito, se não mostra o ícone de favoritar */}
                    {isFavorited ? <Image source={unfavoriteIcon} /> : <Image source={heartOutlineIcon} />}
                </RectButton>
                <RectButton style={styles.contactButton} onPress={handleLinkToWhatsapp}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                </RectButton>
            </View>
        </View>
    </View>)
};

export default TeacherItem;