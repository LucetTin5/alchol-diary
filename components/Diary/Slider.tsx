import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

interface ImageSliderProps {
  images?: {
    id: number;
    url: string;
  }[];
}
export default function ImageSlider({ images }: ImageSliderProps) {
  return (
    <Swiper slidesPerView={1} modules={[Navigation]} navigation>
      {images?.map(({ id, url }) => (
        <SwiperSlide key={id}>
          <Image
            src={url}
            alt={`Slide ${id}`}
            boxSize={300}
            loading="lazy"
            objectFit="cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
