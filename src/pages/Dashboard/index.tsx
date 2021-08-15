import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import {Title, Form, Repos } from './styles'
import logo  from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
    return (
        <>
        <img src={logo} alt="GitCollection" />
        <Title> Catálogo de repositórios do GitHub </Title>

        <Form>
            <input placeholder="username/repository-name" />
            <button type="submit">Buscar</button>
        </Form>

        <Repos>
            <a href="/repositories">
                <img src="https://avatars.githubusercontent.com/u/72214347?v=4" alt="Repository" />
                <div>
                    <strong>gcsbruno/collection-ts</strong>
                    <p>Repositório do projeto em typescript</p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Repos>

        </>
    )
}