import React, { useState, useCallback, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


const TeacherList = () => {

    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState<Teacher[]>([]);

    const searchTeachers = useCallback(async (event: FormEvent) => {
        event.preventDefault();
        const response = await api.get('/classes', {
            params: {
                subject,
                week_day: weekDay,
                time,
            }
        });

        setTeachers(response.data);

    }, [subject, time, weekDay])

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">

                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { label: 'Matemática', value: 'Matemática' },
                            { label: 'Biologia', value: 'Biologia' },
                            { label: 'Geografia', value: 'Geografia' },
                            { label: 'Educação Física', value: 'Educação Física' },
                            { label: 'Português', value: 'Português' },
                            { label: 'História', value: 'História' },
                            { label: 'Química', value: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={weekDay}
                        onChange={e => setWeekDay(e.target.value)}
                        options={[
                            { label: 'Domingo', value: '0' },
                            { label: 'Segunda-Feira', value: '1' },
                            { label: 'Terça-Feira', value: '2' },
                            { label: 'Quarta-Feira', value: '3' },
                            { label: 'Quinta-Feira', value: '4' },
                            { label: 'Sexta-Feira', value: '5' },
                            { label: 'Sábado', value: '6' },
                        ]}
                    />
                    <Input
                        type="time"
                        label="Hora"
                        name="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                    <button type='submit'>Buscar</button>
                </form>

            </PageHeader>
            <main>
                {teachers.map((teacher, index) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                    />
                ))}
            </main>
        </div>
    );
}

export default TeacherList;