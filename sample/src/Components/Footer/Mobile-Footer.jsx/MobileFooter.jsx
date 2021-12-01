import React, {useState} from 'react'

import './Mobile_Footer_style.scss'
import telegram from './assets/imgs/telegram.png';
import instagram from './assets/imgs/instagram.png';
import arrImg from './assets/imgs/arrow_btm.png'


const MobileFooter = () => {

    const [collapse, setCollapse] = useState(false)

    const arr = [
        'لورم ایپسوم',
        'لورم ایپسوم',
        'لورم ایپسوم',
        'لورم ایپسوم',
        'لورم ایپسوم',
        'لورم ایپسوم',
        'لورم ایپسوم',
        'لورم ایپسوم',
        'لورم ایپسوم',
    ]

    return (
        <footer className='footer'>
            <div className='footer-inner'>

                <div className='footer-top'>
                    <div className='scroll-to-top'>
                        <ArrowIcon />
                        <span>بازگشت به بالای صفحه</span>
                    </div>
                </div>

                <div className='footer-bottom'>


                    <div className='social-section'>
                        <span>ما را در شبکه‌های اجتماعی دنبال کنید</span> 
                        <img src={instagram} />

                        <img src={telegram} />
                    </div>
                    <div className='quick-access'>
                        <div className='ch-quick-access' >
                            <p>لورم ایپسوم</p>
                            <p>لورم ایپسوم</p>
                            <p>لورم ایپسوم</p>
                            <p>لورم ایپسوم</p>
                            <p>لورم ایپسوم</p>
                            <p>لورم ایپسوم</p>
                            <p>لورم ایپسوم</p>
                            <p>لورم ایپسوم</p>
                        </div>
                    </div>


                    <div className={`intro-desc ${collapse && 'active'}`}>
                        <div className='title'>
                            فروشگاه اینترنتی مد و لباس دیجی‌استایل
                        </div>
                        <div className='desc'>
                           توسعه اینترنت روشهای خرید ما را به کلی دگرگون کرده است. منافع موجود در خرید اینترنتی هر روز، تعداد بیشتری از مردم را به تجربه آن و ایجاد تغییر در الگوهای متداول خرید ترغیب می کند. بعد از تجربه دیجی کالا، خرید اینترنتی بیشتر با سرعت زندگی مدرن همگام شد و توانست خود را با روحیات و نیازهای رو به رشد مشتریان هماهنگ کند. در حالیکه مشغله های روزانه فرصت لذت بردن از اوقات فراغت را کاهش داده است، صرف زمان های طولانی برای انجام سفرهای درون شهری و خرید نیازهای روزانه معنای خود را از دست می دهد. آنچه در فرصت اوقات فراغت برای افراد در اولویت قرار می گیرد، تفریح، آموزش، ورزش، لذت بردن از علایق شخصی و رفع خستگی‏‏های روزانه است. همه این عوامل افراد را مجاب به استفاده از روش های نوین مانند مراجعه به یک فروشگاه اینترنتی در کمترین زمان برای انجام فعالیت هایی وقت گیر گذشته می کند، تا قبل از دیجی‌استایل فرآیند استقبال مشتریان از دیجی کالا ثابت کرد این روش از زندگی مورد علاقه طیف عظیمی از افراد است
                        </div>


                        <div className='toggle-btn' onClick={() => setCollapse(!collapse)}>
                            {collapse ? 'بیشتر' : 'کمتر'}   
                            <ArrowIcon />
                        </div>


                    </div>

                    


                </div>

                
            <div className="footer_privacy">
                <p>کليه حقوق اين سايت متعلق به شرکت نوآوران فن آوازه (فروشگاه اینترنتی دیجی‌استایل) می‌باشد.</p>


            </div>
            </div>

        </footer>
    )
}


const ArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>



export default MobileFooter
