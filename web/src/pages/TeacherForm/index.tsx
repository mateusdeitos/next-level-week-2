import React, { useState, useCallback } from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

interface ScheduleItems {
    weekDay: number;
    from: string;
    to: string;
}

const TeacherForm = () => {
    const [scheduleItems, setScheduleItems] = useState<ScheduleItems[]>([
        { weekDay: 0, from: '', to: '' }
    ]);

    const addNewScheduleItem = useCallback(() => {
        setScheduleItems([...scheduleItems, { weekDay: 0, from: '', to: '' }]);
    }, [scheduleItems])

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>

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

                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>
                <fieldset>
                    <legend>Horários Disponíveis
                        <button onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>
                    {scheduleItems.map(item => (
                        <div key={item.weekDay} className="schedule-item">
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
                            <Input name="from" label="Das" type="time" />
                            <Input name="to" label="Até" type="time" />
                        </div>
                    ))}

                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;