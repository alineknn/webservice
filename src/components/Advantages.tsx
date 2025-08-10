"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FeatureCard from "./FeatureCard";
import { MapPinIcon, ShieldCheckIcon, BoltIcon, Cog6ToothIcon, LanguageIcon, TagIcon } from "@heroicons/react/24/solid";
import ru from "@/locales/ru/advantages.json";
import en from "@/locales/en/advantages.json";
import dbImage from "@/assets/images/db-image.png"
import Image from "next/image";
export default function AdvantagesAndAudience() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ru;

  const icons = [
    MapPinIcon,
    ShieldCheckIcon,
    BoltIcon,
    Cog6ToothIcon,
    LanguageIcon,
    TagIcon
  ];

  return (
    <section id="Advantages" className="py-24 px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-2xl">
        {/* Badge, Title & Description */}
        <div className="max-w-3xl text-left">
          <span className="inline-block mb-4 bg-[#746FAE] text-white px-4 py-1 rounded-full text-sm">
            Надежность
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl whitespace-nowrap mb-3">
            Преимущества наших решений
          </h2>
          <p className="text-xl md:text-2xl text-black/60">
            Наши дата-центры обеспечивают высокую скорость и надёжность.
            Вы можете быть уверены в безопасности ваших данных.
          </p>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {t.advantages.items.map((item, idx) => {
            const Icon = icons[idx] ?? MapPinIcon;
            return (
              <FeatureCard
                key={`${idx}-${item}`}
                className="border-0 border-r border-gray-200"
                title={
                  <>
                    <div className="mb-2">
                      <Icon className="h-12 w-12 text-black" />
                    </div>
                    <div>
                      {item}
                    </div>
                  </>
                }
              />
            );
          })}
        </div>
        {/* Image Carousel */}
        {(() => {
          // Prepare an array of 3 identical dbImage entries for now
          const images = [dbImage, dbImage, dbImage];
          const [currentIndex, setCurrentIndex] = React.useState(0);

          const handlePrev = (e: React.MouseEvent) => {
            e.preventDefault();
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
          };
          const handleNext = (e: React.MouseEvent) => {
            e.preventDefault();
            setCurrentIndex((prev) => (prev + 1) % images.length);
          };

          return (
            <div className="relative w-full flex justify-center mt-8">
              <Image
                src={images[currentIndex]}
                width={1440}
                height={1024}
                className="w-full h-[800px] object-cover rounded-lg"
                alt="DB-image"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={handlePrev}
                  className="bg-white/80 hover:bg-white shadow px-3 py-2 rounded-full transition"
                  aria-label="Previous image"
                  type="button"
                >
                  &#8592;
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white/80 hover:bg-white shadow px-3 py-2 rounded-full transition"
                  aria-label="Next image"
                  type="button"
                >
                  &#8594;
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}