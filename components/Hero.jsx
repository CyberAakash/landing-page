"use client";
import React from "react";
import config from "@/config/index.json";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Hero = () => {
  const { mainHero } = config;
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen h-fit w-screen overflow-hidden sm:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col pt-28 lg:pt-0  h-full gap-4 items-center lg:items-start justify-center w-full md:w-[50%] text-black dark:text-white"
        >
          <h3 className="text-xl lg:text-3xl font-extralight w-full text-center lg:text-left">
            {mainHero.title}
          </h3>
          <h1 className="text-5xl lg:text-7xl font-black w-full text-center lg:text-left">
            {mainHero.subtitle}
          </h1>
          <p className="text-xs md:text-sm font-thin text-ellipsis max-w-sm w-full text-center lg:text-left">
            {mainHero.description}
          </p>
          <div className="flex items-center justify-start gap-8 mt-8">
            <Link
              href={mainHero.primaryAction.href}
              className="gap-2  text-sm border-2 border-blue-500 bg-blue-500 hover:bg-blue-500/80 hover:border-blue-500/20 text-white p-2 min-w-[150px] flex items-center justify-center rounded-sm"
            >
              {mainHero.primaryAction.text}
              <HeartIcon className="h-4 w-4 text-red-300" />
            </Link>
            <Link
              href={mainHero.secondaryAction.href}
              className="text-sm border-2 border-blue-500 text-blue-500 p-2 min-w-[150px] flex items-center justify-center rounded-sm"
            >
              {mainHero.secondaryAction.text}
            </Link>
          </div>
        </motion.div>
        <Image
          className="w-full lg:w-[50%] px-16 sm:px-10 lg:px-0 mt-16 lg:mt-0"
          src={mainHero.img}
          width={500}
          height={500}
          alt=""
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
    </>
  );
};

export default Hero;
