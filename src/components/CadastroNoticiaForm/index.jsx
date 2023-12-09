'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import { useState } from 'react'

const CadastroNoticiaForm = () => {
    const router = useRouter()

    const [titulo, setTitulo] = useState('');
    const [imagem, setImagem] = useState('');
    const [texto, setTexto] = useState('');
    const [categoria, setCategoria] = useState('');

    const aoSubmeter = async (e) => {
        e.preventDefault();
        try {
            const formulario = {
                titulo,
                imagem,
                texto,
                categoria
            }
            const result = await axios.post('http://localhost:8080/noticias', formulario)
            alert("Nova noticia cadastrada")
            console.log(result.data)
            return router.push('/home')
        } catch (error) {
            alert(error.response)
        }
    }

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;
        if (name === 'titulo'){
            setTitulo(value);
        }
        if (name === 'imagem'){
            setImagem(value);
        }
        if (name === 'texto'){
            setTexto(value);
        }
        if (name === 'categoria'){
            setCategoria(value);
        }
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" name='titulo' onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="img">Imagem</label>
                <input type="text" name='imagem' onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="texto">Texto</label>
                <input type="text" name='texto' onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select name="categoria" onChange={aoAlterarValores}>
                    <option value="produto">Produto</option>
                    <option value="tecnologia">Técnologia</option>
                    <option value="vendas">Vendas</option>
                    <option value="rh">RH</option>
                </select>
            </div>
            <button type='submit'>Criar Noticia</button>
        </form>
    )
}

export default CadastroNoticiaForm;