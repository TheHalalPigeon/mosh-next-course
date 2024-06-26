import Image from "next/image";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image 
        src="https://bit.ly/react-cover" 
        alt="Sky"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}