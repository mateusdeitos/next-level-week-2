import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {
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

const TeacherItem: React.FC<TeacherProps> = ({teacher}) => {
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
                <p>Preço/hora<strong>{teacher.cost}</strong></p>
                <button><img src={whatsappIcon} alt="Contato" />Entrar em contato</button>
            </footer>
        </article>
    );
}

export default TeacherItem;