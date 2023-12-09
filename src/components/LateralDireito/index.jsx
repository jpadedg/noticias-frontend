'use client'
import truncateWithEllipses from "@/libs/truncateWithEllipses";
import CardNoticia from "../CardNoticia";
import './style.css'

export const LateralDireito = ({ noticias }) => {

    const noticiasComElipse = () => {
        console.log(noticias)
        return noticias.map((noticia, index) => {
            noticia.texto = truncateWithEllipses(noticia.texto, 100)
            return (
                <div style={{ marginBottom: '20px' }} key={ index }> 
                    <CardNoticia noticia={noticia}/>
                </div>
            )
        })
    }

    return (
        <div className="ultimas-noticias">
            <div className="titulo">ULTIMAS NOTICIAS</div>
            <div style={{ marginBottom: '10px' }} >
                {noticias.length && noticiasComElipse() }
            </div>
        </div>
    )
}

export default LateralDireito;