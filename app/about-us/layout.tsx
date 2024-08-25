import Image from "next/image";
import React from "react";
import backgroundImage from "@/public/img/bg-coworking.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {children}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-50">
        <Image
          alt="Background Image"
          src={backgroundImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
