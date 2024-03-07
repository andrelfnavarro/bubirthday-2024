import Link from 'next/link';
import creaseSvg from '../assets/letter-crease.svg';
import Image from 'next/image';

export default function Flipped() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center bg-tertiary rounded-3xl border-8 border-grey lg:w-letter aspect-video pb-1">
        <Image src={creaseSvg} alt="Letter crease" className="w-full h-full" />

        <Link passHref legacyBehavior href="/gallery">
          <button className="py-3 px-8 bg-secondary text-3xl text-white flex justify-center items-center rounded-lg absolute">
            Open
          </button>
        </Link>
      </section>
    </main>
  );
}
