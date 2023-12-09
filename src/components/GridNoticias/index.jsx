'use client'
import CardNoticia from '../CardNoticia'
import './style.css'

const GridNoticias = ({ noticias }) => {
    return (
        <div>
            {noticias.map(noticia => (
                <CardNoticia key={noticia} noticia={noticia} />
                ))
            }
        </div>
    )
}

export default GridNoticias;