import Image from "next/image";
import React from "react";
import backgroundImage from "@/public/img/stars.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="absolute top-0 left-0 w-full h-full aspect-video -z-10 overflow-hidden opacity-25">
        <Image
          alt="Background Image"
          src={backgroundImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
