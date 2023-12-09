"use client"
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import './style.css'
import Link from 'next/link';
import { FaAlignJustify } from "react-icons/fa6";
import { GiNewspaper } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

const Menu = () => {
    const [ menuLateral, setMenuLateral] = useState(false);
    const router = useRouter()
    return (
        <>
            <nav className="menu">
                <button onClick={() => setMenuLateral(!menuLateral)}>
                    <FaAlignJustify color='#333'/>
                </button>
                <div className='logo'>
                    <GiNewspaper /> <p>Logo</p>
                </div>
                <button className='login' onClick={() => router.push('/login')}>login</button>
            </nav>


            { menuLateral &&
                <div className='menu_lateral'>
                    <div className='fechar' onClick={() => setMenuLateral(!menuLateral)}>   <IoCloseOutline size="30px" color='#fccd07' /></div>
                    <ul>
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/noticias/produto">Produto</Link></li>
                        <li><Link href="/noticias/tecnologia">Tecnologia</Link></li>
                        <li><Link href="/noticias/rh">RH</Link></li>
                        <li><Link href="/noticias/vendas">Vendas</Link></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Menu;