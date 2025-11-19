import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero relative py-20 px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full flex justify-center mb-8">
        <Image
          src="/phone-guys-logo.png"
          alt="Phone Guys - We Repair"
          width={800}
          height={400}
          priority
          className="w-full max-w-3xl h-auto rounded-2xl shadow-2xl"
        />
      </div>

      <div className="text-center mt-8">
        <p className="text-xl md:text-2xl text-white/90 font-semibold">
          Professional Phone & Device Repair Services
        </p>
        <p className="text-base md:text-lg text-white/70 mt-3">
          Fast, Reliable, Affordable
        </p>
      </div>
    </section>
  );
}
