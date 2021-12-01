import React from 'react'

import './Mobile_Footer_style.scss'
import telegram from './assets/imgs/telegram.png';
import instagram from './assets/imgs/instagram.png';
import arrImg from './assets/imgs/arrow_btm.png'
const MobileFooter = () => {
    return (
        <>
           <div className='container-fluid'>
              <div className='row'>
                  <div className='head_text col-10 pt-2   mx-auto'>
                      <div className="headText_content pt-1  w-75 text-center mx-auto d-flex flex-row-reverse justify-content-between">
                          <p className=''>مارا در شبکه های اجتماعی دنبال کنید</p>
                          <img src={telegram} alt="" />
                          <img src={instagram} alt="" />
                      </div>

                  </div>
              </div>


              <div className='row mt-2  service_cols'  style={{direction:'rtl'}}>
                  <div className="col-5  mx-auto">
                      <p> پشتیبانی مشتریان</p>
                      <p>سوالات متداول</p>
                      <p>بازگردانی کالا</p>
                      <p>دانلود اپلیکیشن</p>




                  </div>
                  <div className="col-5  mx-auto">
                  <p>شرایط استفاده</p>
                      <p>حریم خصوصی</p>
                      <p>درباره ی ما</p>
                      <p>تماس با ما</p>
                 

                  </div>

              </div>


              <div className='row' >

    <div className="col-10 mx-auto text-right  footer_main_text ">
     <h5 className='text-center middle_text col-6 p-2 mx-auto  '>فروشگاه اینترنتی مد و لباس</h5>
    <p className=''>
    
    تولید سادگی نامفهوم از صنعت چاپورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
  
  <a class=" text-center fw-bold d-block" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  <span className=''><img src={arrImg} alt="" /></span>   بیشتر  
  </a>
  
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body text_container border-0 text-center">
  توسعه اینترنت روشهای خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز، تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می کند. بعد از تجربه دیجی کالا، خرید اینترنتی بیشتر با سرعت زندگی مدرن همگام شد و توانست خود را با روحیات و نیازهای رو به رشد مشتریان هماهنگ کند. در حالیکه مشغله های روزانه فرصت لذت بردن از اوقات فراغت را کاهش داده است، صرف زمان های طولانی برای انجام سفرهای درون شهری و خرید نیازهای روزانه معنای خود را از دست می دهد. آنچه در فرصت اوقات فراغت برای افراد در اولویت قرار می گیرد، تفریح، آموزش، ورزش، لذت بردن از علایق شخصی و رفع خستگی‏‏های روزانه است. همه این عوامل افراد را مجاب به استفاده از روش های نوین مانند مراجعه به یک فروشگاه اینترنتی در کمترین زمان برای انجام فعالیت هایی وقت گیر گذشته می کند، تا قبل از دیجی‌استایل فرآیند استقبال مشتریان از دیجی کالا ثابت کرد این روش از زندگی مورد علاقه طیف عظیمی از افراد اس
  </div>
</div>

    </div>

              </div>




              {/* footer-privecy */}
              <div className='row'>
                  <div className="col-10 mx-auto   footer_privecy" >
                      <p className='text-center footer_privecy '>کلیه حقوق این سایت متعلق به شرکت نوآوران فن آوازه (فرشگاه اینترنتی دیجی استایل) می باشد</p>


                  </div>

              </div>

           </div>
            
        </>
    )
}


const ArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>


export default MobileFooter
