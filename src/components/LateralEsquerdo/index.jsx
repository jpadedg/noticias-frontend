'use client'
import truncateWithEllipses from "@/libs/truncateWithEllipses";
import CardNoticia from "../CardNoticia";
import './style.css'


export const LateralEsquerdo = ({ noticia }) => {
    /*const noticia = {
        imagem: 'https://conteudo.imguol.com.br/c/esporte/76/2023/12/06/paulinho-do-vasco-celebra-seu-gol-contra-o-bragantino-pelo-brasileirao-1701915512132_v2_4x3.jpg',
        titulo: 'Vasco consegue vitória heroica em São Januário, bate Red Bull Bragantino e escapa do rebaixamento no Brasileirão',
        texto: 'Em rodada emocionante para os times que lutavam contra o rebaixamento, o Vasco venceu o Red Bull Bragantino por 2 a 1 e garantiu sua permanência na primeira divisão do Campeonato Brasileiro. Os gols foram marcados por Paulinho e Serginho, enquanto Léo Ortiz fez para o time de Bragança Paulista.',
        createdAt: new Date()
    }

    noticia.texto = truncateWithEllipses(noticia[0].texto, 190);
    noticia.titulo = truncateWithEllipses(noticia[0].titulo, 47);*/
    console.log(noticia)

    return (
        <div className="mais-popular">
            <div className="titulo">MAIS POPULAR</div>
            <CardNoticia noticia={noticia} temHover={true}/>
        </div>
    )
}

export default LateralEsquerdo;