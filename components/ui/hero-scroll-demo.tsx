"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unlock your brand’s full potential with AI
            </h1>
            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Discover the powerful features inside Ad Forge that help you move
              from first concept to launch-ready brand in minutes.
            </p>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
          alt="Ad Forge dashboard"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
