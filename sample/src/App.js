import React,{useState,useEffect} from 'react';
import './App.scss';


// import MobileFooter from './Components/Footer/Mobile-Footer.jsx/MobileFooter'
// import Footer from './Components/Footer/Footer';
// import Ecommrce from './Components/Ecommerce/Ecommrce';
// import BeCarpenter from './Components/BeCarpenter';
// import MostPopular from './Components/BeCarpenter/Components/MostPopularProducts/MostPopular';
// import ExcitingDiscount from './Components/ExcitingDiscount/ExcitingDiscount';

// import ProductSearch from './Components/ProductSearch/ProductSearch';
 import BusinessLanding from './Components/Business Landing/BusinessLanding';



const App = () => {

  const [activeMenu,setMenuActive]=useState(true);
  
  useEffect(() => {
    if(!activeMenu && window.innerWidth<=960) {
      document.querySelector('body').style.position='relative';
      document.querySelector('body').style.left='-200px';
     
  } else {
    
    document.querySelector('body').style.left='0px';
  }

   
  }, [activeMenu])
  
  return (
    <div>
      
      {/* <BeCarpenter setMenuActive={setMenuActive}/>
      <MostPopular/> */}
      {/* <ProductSearch/> */}
      <BusinessLanding/>

      
      
          
  


      
     
    </div>
  )
}

export default App
