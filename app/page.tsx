import Image from "next/image";
import images from "../data/images.json";
import ImageGrid from "../components/ImageGrid";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#E5E5E5] text-[#333333] p-4 md:p-8 lg:p-16 font-sans">
      <header className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-24 max-w-7xl mx-auto">
        <div className="max-w-md flex flex-col gap-4 md:gap-6">
          <div>
            <Image
              src="/teenageheads.svg"
              alt="teenageheads"
              width={140}
              height={40}
              priority
              className="w-24 md:w-auto h-auto"
            />
          </div>
          <p className="text-2xl md:text-4xl leading-tighter font-medium text-[#4A4A4A]">
            Teenageheads is a project
            <br />
            heavily inspired by the teen
            <br />
            titans looks of most of their
            <br />
            characters.
          </p>
          <p className="text-md md:text-lg font-medium text-[#4A4A4A]">
            Built by <a href="https://www.hendo.space/" className="text-grey-400 hover:underline">Hendo</a>.
          </p>
        </div>
        
      </header>

      <ImageGrid images={images} />
    </div>
  );
}
