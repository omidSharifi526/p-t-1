import React,{useState} from 'react';
import './Navbar_style.scss';
import {NavLink as Link} from 'react-router-dom';
import close from '../../../Asset/imgs/close.png';
import menu from '../../../Asset/imgs/menu.png'


const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{setClick(!click)}
    return (
        <nav className='mnavbar'>
            <div className='mnav-container'>


                
                <div className='mnav-logo'>
                    <Link className='mnav-logo' to='/'><span className='marked'>Be</span><span>carpenter</span></Link>
                </div>



                <ul className={click?"mnav-menu active":"mnav-menu"}>
                <li activeClassName='active' className='mnav-item'>
                        <Link onClick={handleClick} to='/'  className='mnav-links'>Home</Link>
                    </li>
                    <li className='mnav-item' >
                        <Link onClick={handleClick} to='/aboute' activeClassName='active' className='mnav-links'>Aboute</Link>
                        </li>
                    <li className='mnav-item'>
                        <Link onClick={handleClick} to='/contact' activeClassName='active' className='mnav-links'>Contact</Link>
                        </li>
                    <li className='mnav-item'>
                        <Link onClick={handleClick} to='/help' activeClassName='active' className='mnav-links'>Help</Link>
                    </li>
                    <li className='mnav-item'>
                        <Link onClick={handleClick} to='/help' activeClassName='active' className='mnav-links'>Help</Link>
                    </li>
                    <li className='mnav-item'>
                        <Link onClick={handleClick} to='/help' activeClassName='active' className='mnav-links'>Help</Link>
                    </li>
                    <li className='mnav-item'>
                        <Link onClick={handleClick} to='/help' activeClassName='active' className='mnav-links'>Help</Link>
                    </li>
                </ul>
                <div className='nav-icon'>
                    <img  onClick={handleClick}  src={click?close:menu} alt="" />

                </div>


            </div>
            
        </nav>
    )
}

export default Navbar

