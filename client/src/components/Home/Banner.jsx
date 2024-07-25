import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// custom images
import banner1 from "/banner/banner1.png";
import banner2 from "/banner/banner2.png";
import banner3 from "/banner/banner3.png";
import banner4 from "/banner/banner4.png";
import banner5 from "/banner/banner5.png";
// custom images

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
            <SwiperSlide>
                <img src={banner1} alt="first banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner2} alt="second banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner3} alt="third banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner4} alt="fourth banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner5} alt="fifth banner" />
            </SwiperSlide>
        </Swiper >
        </>
    );
}
