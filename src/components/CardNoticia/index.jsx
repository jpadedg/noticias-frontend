'use client'
import { useState } from 'react'
import './style.css'

const CardNoticia = ({ noticia, temHover = false }) => {
    const [isHover, setIsHover] = useState(false);

   return (
        <div className='card-noticia'>
            <div 
                style={{ position: 'relative' }} 
                onMouseOver={() => setIsHover(temHover ? true : false)} 
                onMouseLeave={() => setIsHover(false)}
                >
                <div className='popular' style={{ opacity: isHover ? '1' : '0' }}>Clique Aqui</div>
                <img className='imagem' src={noticia.imagem} alt={noticia.titulo} />
            </div>
            <h2>{noticia.titulo}</h2>
            <p>{noticia.texto}</p>
            <div className="publicado-em">{ new Date(noticia.createdAt).toLocaleDateString('pt-BR') }</div>
        </div>
   )
}

export default CardNoticia;