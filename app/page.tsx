import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center bg-tertiary rounded-3xl border-8 border-grey lg:w-letter aspect-video">
        <h1 className="text-center lg:text-6xl text-primary text-stroke-1 mb-8">
          Bubi&apos;s
          <br />
          Birthday Card
        </h1>

        <Link passHref legacyBehavior href="/backface">
          <button className="py-3 px-8 bg-secondary text-3xl text-white flex justify-center items-center rounded-lg">
            Flip
          </button>
        </Link>
      </section>
    </main>
  );
}
