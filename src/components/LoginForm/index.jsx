'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import './style.css'

const { useState } = require("react")

const LoginForm = () => {
    const router = useRouter()
    const [ formulario, setFormulario] = useState({
        email: '',
        senha: ''
    })

    const aoSubmeter = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.post('http://localhost:8080/login', formulario)
            alert(result.data.message)
            return router.push('/admin/noticia/criar')
        } catch (error) {
            alert("E-mail ou senha incorretos!!")
        }
    }

    const aoAlterarValores = (e) => {
        const { name, value } = e.target
        setFormulario({
            ...formulario, 
            [name]: value
        })
    }

    return (
        <form className='login' onSubmit={aoSubmeter}>
            <div>
                <label className='email' htmlFor="email">E-mail</label>
                <input className='loginInput' type="text" name="email" onChange={aoAlterarValores}/>
            </div>
            <div>
                <label className='senha' htmlFor="senha">Senha</label>
                <input className='loginInput' type="password" name="senha" onChange={aoAlterarValores}/>
            </div>
            <button className='button' type="submit">Enviar</button>
        </form>
    )
}

export default LoginForm;