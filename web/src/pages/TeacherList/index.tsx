import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TeacherList = () => {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">

                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
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
                    <Input type="time" label="Hora" name="time" />
                </form>

            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;