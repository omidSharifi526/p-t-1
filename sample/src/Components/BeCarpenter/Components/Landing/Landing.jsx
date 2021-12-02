import React from 'react';
import './landing_style.scss';
import img1 from '../../Asset/imgs/bg-chair.jpg';
import  Navbar  from './Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Aboute from '../../pages/Aboute';
// import Help from '../../pages/Help';
// import Home from '../../pages/Home';
// import Contact from '../../pages/Contact';

const Landing = () => {
    return (
        <>
        <Router>

        {/* <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/aboute' element={<Aboute/>}/>
            <Route path='/help' element={<Help/>}/>
        </Routes> */}
        <div className='main-container'>
            <nav>
                <div className='main-navbar-container'>
                  <Navbar/>
                </div>
            
               
            </nav>

            <div className='slider-container'>
                <div className="slider">
                    <div className='imgs-container'>
                        <img src={img1} alt="" />
                      
                    </div>
                    <div className='text-container'>
                        <h1>Tables</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <button>View our products</button>
                    </div>
                    <img className='arrow-slider' src="https://themes.muffingroup.com/be/carpenter2/wp-content/uploads/revslider/carpenter2/home_carpenter2_slider_next.png" alt="" />

                </div>
            </div>

            

           

            
        </div>
       
        </Router>
        </>
    )
}

export default Landing
