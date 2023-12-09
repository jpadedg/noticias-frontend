'use client'

import axios from 'axios'
import GridNoticias from "@/components/GridNoticias"
import { useEffect, useState } from 'react'
import Noticia from '@/components/Noticia'

const NoticiasPage = ({ params }) => {
    const [noticias, setNoticias] = useState([]);

    const getNoticias = async () => {
        try{
            const result = await axios.get(`http://localhost:8080/noticias?categoria=${params.categoria}`);
            console.log(result)
            setNoticias(result.data[0]);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    useEffect(() => {
        getNoticias()
    }, []);

    return (
        <div>
            <h1>Noticias {params.categoria.toUpperCase()}</h1>
            <GridNoticias noticias={noticias}/>
        </div>
    )
}

export default NoticiasPage;