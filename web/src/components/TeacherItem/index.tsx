import React, { useCallback } from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import { formatCurrency } from '../../utils/formatCurrency';

export interface Teacher {
    id: number;
    name: string;
    subject: string;
    cost: number;
    avatar: string;
    whatsapp: string;
    bio: string;
}

interface TeacherProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {

    const createNewConnection = useCallback(async () => {
        await api.post('/connections', {
            user_id: teacher.id,
        });
    }, [teacher.id])

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>{teacher.bio}</p>
            <footer>
                <p>Preço/hora<strong>{formatCurrency(teacher.cost)}</strong></p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Contato" />
                        Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;