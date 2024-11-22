import Image from "next/image";
import React from "react";
import backgroundImage from "@/public/img/projects.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden relative">
      {children}
      <div className="absolute bottom-0 w-screen aspect-video -z-10 overflow-hidden opacity-25">
        <Image
          alt="Background Image"
          src={backgroundImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
