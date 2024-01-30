
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import Description from './sections/description';

const Intro = () => {
    const ssClassNames = 'flex text-center justify-center items-center p-14'
    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={10}
                speed={1500}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="w-full h-screen"
            >
                <SwiperSlide className={ssClassNames}>
                    <Description/>
                </SwiperSlide>
                <SwiperSlide className={ssClassNames}>Slide 2</SwiperSlide>
                <SwiperSlide className={ssClassNames}>Slide 3</SwiperSlide>
                <SwiperSlide className={ssClassNames}>Slide 4</SwiperSlide>
            </Swiper>
        </>
    )
}

export default Intro
