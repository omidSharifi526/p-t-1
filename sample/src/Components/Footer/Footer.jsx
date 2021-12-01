import React from 'react'
import './Footer_style.scss';
import img from '../../asset/images/352f3537.svg';
import en from '../../asset/images/en.png'
const Footer = () => {
    return (
        <div className='container'>
        <div className='topFooter'>

            <div style={{marginBottom:'50px'}}>
            <div className='tfHead imgHead'>
                <img src={img} alt="" />
                <div className='seprator'>

                </div>

            </div>
            </div>



            <div className='tfBody'>
                <div className="col-tfBody">
                   <h4>خرید</h4>
                   <span>زنانه</span>
                   <span>مردانه</span>
                   <span>بچگانه</span>
                   <span>زیبایی و سلامت</span>

                </div>
                <div className="col-tfBody">
                <h4>خدمات مشتریان</h4>
                   <span>پاسخ به سوالات مشتریان</span>
                   <span>رویه های بازگرداندن کالا</span>
                   <span>شرایط استفاده</span>
                  
                   <span> حریم خصوصی</span>
                    
                    
                </div>



                <div className="col-tfBody">
                <h4> اطلاعات دیجی استایل</h4>
                   <span>درباره ی دیجی استایل</span>
                   <span>تماس با دیجی ستایل</span>
                   <span>همکاری</span>
                   <span>شرایط استفاده</span>
                  
                   
                    
                </div>
                <div className="col-tfBody">
                    <div className='contact_us_top'>


                    <div className='support_container' >
                    <h4 style={{marginBottom:'30px',marginTop:'20px'}}>تلفن پشتیبانی:02155536589-96</h4>
                    <div className='tooltipbox'>
                    <img className='tooltip-img' src="https://img.icons8.com/windows/32/000000/collapse-arrow.png"/>

                    </div>
                    </div>


                   <div className="icnSection">
                   <img className='icns' src="https://img.icons8.com/material-outlined/24/000000/telegram-app.png"/>
                    <img className='icns' src="https://img.icons8.com/ios/50/000000/twitter--v1.png"/>
                    <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/>
                   </div>



                    </div>

                    <div className='contact_us_btm'>
                        <h5 className='t_h1' >ثبت ‌نام در خبرنامه دیجی‌استایل</h5>
                        <div className='cnt_btn_container'>
                            <input placeholder='ایمیل خود را وارد کنید' type="text" name="" id="" />
                           <button className='searchBtn' >
                           <img src="https://img.icons8.com/fluency/48/000000/long-arrow-left.png"/>
                           </button>

                        </div>

                    </div>
                </div>

            </div>

        </div>
        <div className='bottomFooter'>
            <div className='btmfooter_head'>
                <div className='btmfooter_head_text'>
                    <h3 className='h_t' >دانلود اپلیکیشن دیجی استایل</h3>
                </div>
                <div className='btmfooter_head_links'>
                    <div className='store_links'>
                       <span>دریافت از</span>
                       <p className="store_icns">
                           GooglePlay
                       </p>

                    </div>
                    <div className='store_links'>
                    <span>دریافت از</span>
                    <p className="store_icns">
                           Bazar
                       </p>

                    </div>
                    <div className='store_links'>
                    <span>دریافت از</span>
                    <p className="store_icns">
                           App Store
                       </p>
                    </div>
                    <div className='store_links'>
                    <span>دریافت از</span>
                    <p className="store_icns">
                    GooglePlay
                       </p>
                    </div>
                    

                </div>

            </div>
            <div className='btmfooter_body'>
                <div className='text'>
                    <h4 cl>فروشگاه اینترنتی مد و لباس دیجی‌استایل</h4>
                    <p className='main_text'>دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت تخصصی پا به عرصه مد، پوشاک و سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط با مد و پوشاک از انواع لباس زنانه، لباس مردانه و لباس بچگانه گرفته تا کیف و کفش و اکسسوری را با تخفیف ویژه در حراج ها، پیدا کنید و به سادگی یک ست کامل از جدیدترین‌ برندهای معتبر را بخرید.</p>
                    <div>مشاهده بیشتر</div>

                </div>
                <div className='logo'>
                    <img src={en} alt="" />


                </div>

            </div>
            <div className='btmfooter_bottom'>
                <div>
                    <p className='privacy_text'>کليه حقوق اين سايت متعلق به شرکت نوآوران فن آوازه (فروشگاه اینترنتی دیجی‌استایل) می‌باشد.</p>
                </div>
                <div>
                    <span>digistyle.com - 2021 © Copyright</span>
                </div>

            </div>

        </div>
        
        </div>
    )
}

export default Footer
