'use client'
import Noticia from '@/components/Noticia'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'
import LateralEsquerdo from '@/components/LateralEsquerdo'
import LateralDireito from '@/components/LateralDireito'

const HomePage = () => {
    const [news, setNews] = useState([]);

    const getNews = async () => {
        try{
            const result = await axios.get('http://localhost:8080/noticias');
            console.log(news);
            console.log(result);
            setNews(result.data[0]);
        } catch (error) {
            alert(error.response.data);
        }
    }

    const getNoticiaMaisPopular = () => {
        if(news) {
            return news.find(news => news.isPopular)
        }
    }

    const getUltimasNoticias = () => {
        if(news) {
            return news.filter(news => news.isUltimas)
        }
    }

    useEffect(() => {
        getNews();
        console.log(news);
    }, []);

    return(
        <div className='grid-home'>
            { getNoticiaMaisPopular() && <LateralEsquerdo noticia={getNoticiaMaisPopular()}/>  }
            <div>
                {news.map((noticia) =>
                    <Noticia key={noticia._id} noticia={noticia} /> )                
                }
            </div>
            { getUltimasNoticias() && <LateralDireito noticias={getUltimasNoticias()}/> }
        </div>
    )
}

export default HomePage;