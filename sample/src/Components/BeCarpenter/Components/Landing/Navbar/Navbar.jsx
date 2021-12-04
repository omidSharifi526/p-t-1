import React,{useState} from 'react';
import './Navbar_style.scss';
import {NavLink as Link} from 'react-router-dom';
import close from '../../../Asset/imgs/close.png';
import menu from '../../../Asset/imgs/menu.png'


const Navbar = ({setMenuActive}) => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{setClick(!click);setMenuActive(click)}
    return (
        <nav className='mnavbar'>
            <div className={click?"mnav-container-actived":"mnav-container"}>


                
                <div className='mnav-logo'>
                    <Link className='mnav-logo' to='/'><span className='marked'>Be</span><span>carpenter</span></Link>
                </div>



                <ul className={click?"mnav-menu active":"mnav-menu"}>
                <li activeClassName='active' className='mnav-item'>
                        <Link  to='/home'  className='mnav-links'>Home</Link>
                    </li>
                    <li className='mnav-item' >
                        <Link  to='/aboute' activeClassName='active' className='mnav-links'>Chairs</Link>
                        </li>
                    <li className='mnav-item'>
                        <Link  to='/tables' activeClassName='active' className='mnav-links'>Tables</Link>
                        </li>
                    <li className='mnav-item'>
                        <Link  to='/Details' activeClassName='active' className='mnav-links'>Details</Link>
                    </li>
                    <li className='mnav-item'>
                        <Link  to='/aboutes' activeClassName='active' className='mnav-links'>Aboute us</Link>
                    </li>
                    <li className='mnav-item'>
                        <Link  to='/contact' activeClassName='active' className='mnav-links'>Contact</Link>
                    </li>
                    <li className='mnav-item'>
                        <Link  to='/buy' activeClassName='active' className='mnav-links'>Buy now</Link>
                    </li>
                </ul>
                <div className='nav-icon' >
                    <img  onClick={handleClick}  src={click?close:menu} alt="" />

                </div>


            </div>
            
        </nav>
    )
}

export default Navbar

