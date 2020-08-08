import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {

    const [favorites, setFavorites] = useState([]);

    const loadFavorites = useCallback(async () => {
        await AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachersIds = JSON.parse(response);
                setFavorites(favoritedTeachersIds);
            }

        });
    }, []);

    // useFocusEffect força o carregamento da lista toda vez que entrar na página
    useFocusEffect(() => {
        loadFavorites();
    })

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={styles.teacherListContent} // -> Aplica a estilização ao Conteúdo do scrollview
            >
                {favorites.map((teacher: Teacher, index) => {
                    return <TeacherItem
                        key={teacher.id}
                        id={teacher.id}
                        avatar={teacher.avatar}
                        bio={teacher.bio}
                        cost={teacher.cost}
                        name={teacher.name}
                        subject={teacher.subject}
                        whatsapp={teacher.whatsapp}
                        favorited
                    />
                })}

            </ScrollView>
        </View>
    )
}

export default Favorites;