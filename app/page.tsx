'use client';
import './globals.css';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

import creaseSvg from './assets/letter-crease.svg';

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(state => !state);
    }
  };

  return (
    <div className="flip-card">
      <motion.div
        className="flip-card-inner bg-tertiary rounded-3xl border-8 border-grey lg:w-letter aspect-video pb-1"
        initial={false}
        animate={{
          rotateY: isFlipped ? 180 : 360,
        }}
        onAnimationComplete={() => setIsAnimating(false)}
        transition={{
          duration: 0.6,
        }}
      >
        <div className="flip-card-front h-full w-full flex justify-center items-center flex-col">
          <h1 className="text-center lg:text-6xl text-primary text-stroke-1 mb-8">
            Bubi&apos;s
            <br />
            Birthday Card
          </h1>

          <button
            onClick={handleFlip}
            className="py-3 px-8 bg-secondary text-3xl text-white flex justify-center items-center rounded-lg"
          >
            Flip
          </button>
        </div>

        <div className="flip-card-back h-full w-full flex justify-center items-center flex-col">
          <Image
            src={creaseSvg}
            alt="Letter crease"
            className="w-full h-full"
          />

          <Link passHref legacyBehavior href="/gallery">
            <button className="py-3 px-8 bg-secondary text-3xl text-white flex justify-center items-center rounded-lg absolute">
              Open
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
