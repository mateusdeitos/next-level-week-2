import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

interface ScheduleItems {
    week_day: string;
    from: string;
    to: string;
}

const TeacherForm = () => {
    const history = useHistory();
    const [scheduleItems, setScheduleItems] = useState<ScheduleItems[]>([
        { week_day: '0', from: '', to: '' }
    ]);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const addNewScheduleItem = useCallback(() => {
        setScheduleItems([...scheduleItems, { week_day: '0', from: '', to: '' }]);
    }, [scheduleItems]);

    const handleCreateClass = useCallback((event: FormEvent) => {
        event.preventDefault();
        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        }).then(() => {
            alert('Cadastro realizado com sucesso');

            history.push('/');
        }).catch(() => alert('Erro no cadastro!'));

    }, [avatar, bio, cost, history, name, scheduleItems, subject, whatsapp]);

    const setScheduleItemValue = useCallback(
        (position: number, field: string, value: string) => {
            const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
                if (index === position) {
                    return { ...scheduleItem, [field]: value };
                }
                return scheduleItem;
            });

            setScheduleItems(updatedScheduleItems);
        }, [scheduleItems])

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <form onSubmit={handleCreateClass}>

                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(event) => setAvatar(event.target.value)}
                        />
                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(event) => setWhatsapp(event.target.value)}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(event) => setBio(event.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
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

                        <Input
                            name="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Horários Disponíveis
                        <button onClick={addNewScheduleItem}>
                                + Novo Horário
                        </button>
                        </legend>
                        {scheduleItems.map((item, index) => (
                            <div key={index} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    value={item.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                    name="from"
                                    label="Das"
                                    type="time"
                                    value={item.from}
                                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                />
                                <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                    value={item.to}
                                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                />
                            </div>
                        ))}

                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">Salvar Cadastro</button>
                    </footer>

                </form>
            </main>
        </div>
    );
}

export default TeacherForm;