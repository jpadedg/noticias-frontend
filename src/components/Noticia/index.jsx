'use client'
const { default: Image } = require("next/image")
import './style.css'

const Noticia = ({ noticia }) => {
    return (
        <div className='noticia'>
            <img className="imagem" src={noticia.imagem} alt="noticia" /><br></br>
            <div className='titulo'>{noticia.titulo}</div><br></br>
            <div className="publicado-em">{ new Date(noticia.createdAt).toLocaleDateString('pt-BR') }</div>
            <div className='texto' dangerouslySetInnerHTML={{ __html: noticia.texto }}></div>
        </div>
    )
}

export default Noticia