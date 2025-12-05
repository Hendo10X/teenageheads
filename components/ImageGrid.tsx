"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Download } from "lucide-react";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageItem[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
          className="aspect-square bg-[#D9D9D9] rounded-lg flex items-center justify-center relative overflow-hidden transition-transform group"
        >
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-zinc-300 overflow-hidden relative">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <a
            href={image.src}
            download={`teenheads${String(image.id).padStart(2, "0")}.png`}
            className="absolute bottom-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
            title="Download"
          >
            <Download size={16} className="text-zinc-700" />
          </a>
        </motion.div>
      ))}
    </div>
  );
}
