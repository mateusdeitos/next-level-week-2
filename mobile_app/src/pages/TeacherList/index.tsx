import React, { useState, useCallback } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacherProps } from '../../components/TeacherItem';
import api from '../../services/api';

const TeacherList: React.FC = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);

    const handleSubmit = useCallback(async () => {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        console.log(response.data);
        setTeachers(response.data);
    }, [subject, week_day, time]);


    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys Disponíveis"
                headerRight={(
                    <BorderlessButton onPress={() => setIsFiltersVisible(!isFiltersVisible)}>
                        <Feather name={isFiltersVisible ? 'arrow-up' : 'arrow-down'} size={20} color="#fff" />
                    </BorderlessButton>
                )} >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual é a matéria?"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual o horário?"
                                />
                            </View>
                        </View>
                        <RectButton
                            style={styles.submitButton}
                            onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={styles.teacherListContent} // -> Aplica a estilização ao Conteúdo do scrollview
            >
                {teachers.map((teacher: ITeacherProps, index) => {
                    return <TeacherItem
                        key={index}
                        avatar={teacher.avatar}
                        bio={teacher.bio}
                        cost={teacher.cost}
                        name={teacher.name}
                        subject={teacher.subject} />
                })}

            </ScrollView>
        </View>
    )
}

export default TeacherList;