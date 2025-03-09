"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Post } from '@/models/post';
import Display from '@/components/cards/display';

interface SliderProps {
  posts: Post[];
  type: string;
}

export default function Slider({ posts, type }: SliderProps) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        560: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1536: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {
        posts.map((post) => (
          <SwiperSlide key={post.id}>
            <Display
              id={post.id}
              image={post.images[0]}
              title={post.title}
              summary={post.summary}
              author={post.authorGithub}
              date={new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo' }).format(post.createdAt)}
              type={type}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};