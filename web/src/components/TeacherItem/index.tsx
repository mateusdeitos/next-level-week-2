import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/8628316?v=4" alt="Mateus Deitos" />
                <div>
                    <strong>Mateus Deitos</strong>
                    <span>Engenharia Civil</span>
                </div>
            </header>
            <p>
                Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.

                <br />
                <br />
                Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"

            </p>
            <footer>
                <p>Preço/hora<strong>R$ 80,00</strong></p>
                <button><img src={whatsappIcon} alt="Contato" />Entrar em contato</button>
            </footer>
        </article>
    );
}

export default TeacherItem;