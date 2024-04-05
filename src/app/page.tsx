"use client";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Category from "@/components/Category";

const urls = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/LoveAdhura/3000x1200_V4._CB579270454_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/Img23/Cons_Event/Eid/Hero_3000x1200_02._CB561525535_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_1stapr._CB561301598_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fresh/GW/Hero/April24/1/1st_Fresh_GW_Hero_PC1x_RC._CB561462241_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Benz_newlaunch/Teaser/GW/Launch/Today/D123068930_WLD_OnePlus_Benz_NewLaunch_DesktopTall_Hero_3000x1200._CB561287152_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/dell/hero/Tall_Hero_3000X1200_m16._CB561514648_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Siddhi/CBCC-PC_Hero_3000x1200_Prime_28thsept._CB576824032_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Prime_LS_PC_Hero_AC_2x._CB579824355_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fresh/GW/Hero/April24/2/2nd_Fresh_GW_Hero_PC1x_RC._CB561462270_.jpg",
];

function page() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-center pb-5">
      {/* Banner section */}
      <div className="relative flex h-1/2 items-center justify-center ">
        <Carousel
          plugins={[plugin.current]}
          className="w-[90%]"
          onMouseEnter={plugin.current.stop}
          onMouseOut={plugin.current.play}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {urls.map((uri, index) => (
              <CarouselItem key={index}>
                <div className="relative flex w-full justify-center">
                  <Image
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0)",
                    }}
                    src={uri}
                    width={2000}
                    height={100}
                    alt=""
                    className="h-auto w-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-[10%] right-[10%] top-[20%] flex items-center justify-center">
            <div className="mx-auto flex w-1/2 max-w-[80%] justify-between">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>

      {/* Category section */}
      <div className="absolute top-[39%] flex w-[80%] justify-center ">
        <Category />
      </div>
    </div>
  );
}

export default page;
