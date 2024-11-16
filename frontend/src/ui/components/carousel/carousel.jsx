import { Carousel } from '@material-tailwind/react';

export function CarouselDefault({ images }) {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      transition={{ duration: 1 }}
      navigation={() => false}
      className="rounded-xl overflow-hidden"
    >
      {images.map(({ img, alt }, idx) => (
        <img
          key={`${alt}_${idx}`}
          src={img}
          alt={alt}
          className="xl:max-h-96 w-full object-cover object-center"
        />
      ))}
    </Carousel>
  );
}
