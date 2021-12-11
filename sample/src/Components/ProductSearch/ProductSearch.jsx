import React from 'react';
import './productsearch_style.scss';
import CategoriesManager from './Components/CategoriesManager/CategoriesManager';

const ProductSearch = () => {
    return (
        <main  className='main-container'>
          <section className='product-result'>
              

          </section>
          <section className='sidebar'>
              <CategoriesManager titleCastegory={'دسته بندی'}/>
            
              <CategoriesManager titleCastegory={' Customer Review'}/>
              <CategoriesManager titleCastegory={'Eligible for Free Shipping '}/>
              <CategoriesManager titleCastegory={'Connectivity '}/>
              <CategoriesManager titleCastegory={'Condition'}/>
              <CategoriesManager titleCastegory={'Computer Keyboard Feature '}/>



          </section>
        </main>
    )
}

export default ProductSearch
