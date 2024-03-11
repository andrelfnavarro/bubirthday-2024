import Image from 'next/image';

import starRight from '../assets/star-right.svg';
import starLeft from '../assets/star-left.svg';
import arrow from '../assets/arrow.svg';

import wave from '../assets/wave.svg';

export default function Gallery() {
  return (
    <div>
      <header className="flex items-center relative mb-24">
        <Image
          src={starLeft}
          alt="Star left"
          className="h-24 absolute bottom-7 -left-20"
        />

        <Image
          src={starRight}
          alt="Star right"
          className="h-24 absolute top-7 -right-20"
        />

        <h1 className="text-7xl text-stroke-1 text-secondary z-10 ">
          Happy birthday Bubi
        </h1>
      </header>

      <section className="flex gap-6 w-full justify-center items-center relative">
        <Image
          src={wave}
          alt="Wave"
          className="h-96 absolute -top-16 -left-10"
        />

        <Image
          src={wave}
          alt="Wave"
          className="h-96 absolute -bottom-16 left-2/5 rotate-180"
        />

        <Image
          src={wave}
          alt="Wave"
          className="h-96 absolute -top-16 right-36"
        />

        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={`image-${i + 1}`}
            src={`/${i + 1}.jpg`}
            alt="A picture of Bubi"
            className="rounded-lg z-10"
            width={150}
            height={320}
          />
        ))}

        <div className="w-[150px] h-[320px] rounded-lg border-4 border-secondary border-dashed">
          <Image
            src={arrow}
            alt="Arrow"
            className="h-16 w-16 absolute top-0 -right-20 rotate-12"
          />

          <p className="text-xl text-secondary absolute -top-10 -right-40">
            Insert good times
          </p>
        </div>
      </section>

      <div className="flex w-5/6 justify-between mt-20 mx-auto relative">
        <div className="w-1 h-10 bg-secondary" />
        <div className="w-1 h-10 bg-secondary" />
        <p className="text-2xl text-secondary absolute -right-20 -top-10">
          Up next?
        </p>
      </div>

      <div className="w-5/6 mx-auto h-1 justify-between bg-secondary"></div>

      <section className="w-5/6 relative mt-4 mx-auto">
        <p className="text-2xl text-secondary absolute -left-20">April 2023</p>

        <p className="text-2xl text-secondary absolute -right-20">March 2024</p>
      </section>
    </div>
  );
}
