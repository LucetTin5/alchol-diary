import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Image } from "@chakra-ui/react";

interface ImageSliderProps {
  images?: {
    id: number;
    url: string;
  }[];
}
export default function ImageSlider({ images }: ImageSliderProps) {
  return (
    <Swiper modules={[Navigation]} slidesPerView={1} navigation>
      {images?.map(({ id, url }) => (
        <SwiperSlide key={id}>
          <Image
            src={url}
            alt={`Slide ${id}`}
            width="300"
            height="300"
            m="0 auto"
            borderRadius={10}
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
