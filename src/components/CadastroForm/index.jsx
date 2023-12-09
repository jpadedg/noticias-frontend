'use client'
import { useState } from 'react';
import axios from 'axios';

const CadastroForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSubmeter = async (e) => {
        e.preventDefault();
        try {
            const formulario = {
                nome,
                email,
                senha
            }
            const result = await axios.post('http://localhost:8080/usuarios', formulario)
            alert("Novo usuario acadastrado")
            return router.push('/home')
        } catch (error) {
            alert(error.response.data.message)
        }
        console.log('submetido')
    }

    const aoAlterarValores = (e) => {
        const { name, value} = e.target;
        switch (name) {
            case 'nome':
                setNome(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'senha':
                setSenha(value)
                break;
            default:
                break;
        }
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" onChange={aoAlterarValores}/>
            </div>
            <div>
                <label htmlFor="email">E-mal</label>
                <input type="text" name="email" onChange={aoAlterarValores}/>
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" onChange={aoAlterarValores}/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
};

export default CadastroForm;