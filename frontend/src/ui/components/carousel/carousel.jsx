import { Carousel } from '@material-tailwind/react';

export function CarouselDefault({ images }) {
  return (
    <div className="mx-16 my-4">
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
            className="h-80 w-full object-cover object-center"
          />
        ))}
      </Carousel>
    </div>
  );
}
