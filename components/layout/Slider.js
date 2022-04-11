import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import slidee images
import img1 from "./../../images/1.jpg";
import img2 from "./../../images/2.jpg";
import img3 from "./../../images/3.jpg";
import img4 from "./../../images/4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { memo } from "react";

const Slider = () => {
  return (
    <div className="flex justify-center z-0 top-20 md:mt-0 mt-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      >
        <SwiperSlide>
          <Image src={img1} height={700} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} height={700} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} height={700} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} height={700} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default memo(Slider);
