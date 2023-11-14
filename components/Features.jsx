"use client"

import Image from "next/image";
import React from "react";
import config from "@/config/index.json";
import { motion, useScroll } from "framer-motion";

const Features = () => {
    const {features} = config;
  return (
    <>
      <div className="mt-16 grid place-items-center grid-cols-8 text-black dark:text-white gap-16">
        <div className="mb-10 col-span-8 col-start-1 flex flex-col items-center justify-center gap-4 ">
          <motion.h2
            initial={{ opacity: 0, y: 100, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full text-center text-xl lg:text-3xl font-extralight"
          >
            {features.title}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 100, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full text-center max-w-lg lg:max-w-2xl text-5xl lg:text-7xl font-black"
          >
            {features.subtitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full text-center text-xs md:text-sm font-thin text-ellipsis max-w-lg lg:max-w-2xl"
          >
            {features.description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-8 md:col-span-4 col-start-1 w-full h-full flex flex-col gap-2 items-center justify-center  p-4"
        >
          <h1 className="text-4xl font-bold w-full text-center md:text-left">
            {features.items.at(0).name}
          </h1>
          <p className="text-lg font-light w-full text-center md:text-left max-w-xs">
            {features.items.at(0).description}
          </p>
        </motion.div>
        <Image
          src={features.items.at(0).icon}
          alt=""
          width={500}
          height={500}
          loading="lazy"
          className="col-span-6 md:col-span-4 col-start-2 md:col-start-5 h-full"
        />
        {/* Hide and show starts */}
        <Image
          src={features.items.at(1).icon}
          alt=""
          width={500}
          height={500}
          loading="lazy"
          className="hidden md:block h-full col-span-6 md:col-span-4 col-start-2"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex col-span-8 md:col-span-4 col-start-1 md:col-start-5 w-full h-full flex-col gap-2 items-center justify-center  p-4"
        >
          <h1 className="text-4xl font-bold w-full text-center md:text-left">
            {features.items.at(1).name}
          </h1>
          <p className="text-lg font-light w-full text-center md:text-left max-w-xs">
            {features.items.at(1).description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex md:hidden col-span-8 md:col-span-4 col-start-1 md:col-start-5 w-full h-full flex-col gap-2 items-center justify-center  p-4"
        >
          <h1 className="text-4xl font-bold w-full text-center md:text-left">
            {features.items.at(1).name}
          </h1>
          <p className="text-lg font-light w-full text-center md:text-left max-w-xs">
            {features.items.at(1).description}
          </p>
        </motion.div>
        <Image
          src={features.items.at(1).icon}
          alt=""
          width={500}
          height={500}
          loading="lazy"
          className="block md:hidden h-full col-span-6 md:col-span-4 col-start-2"
        />
        {/* Hide and show ends */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-8 md:col-span-4 col-start-1 w-full h-full flex flex-col gap-2 items-center justify-center  p-4"
        >
          <h1 className="text-4xl font-bold w-full text-center md:text-left">
            {features.items.at(2).name}
          </h1>
          <p className="text-lg font-light w-full text-center md:text-left max-w-xs">
            {features.items.at(2).description}
          </p>
        </motion.div>
        <Image
          src={features.items.at(2).icon}
          alt=""
          width={500}
          height={500}
          loading="lazy"
          className="col-span-6 md:col-span-4 col-start-2 md:col-start-5 h-full"
        />
        {/* Hide and show starts */}
        <Image
          src={features.items.at(3).icon}
          alt=""
          width={500}
          height={500}
          loading="lazy"
          className="hidden md:block h-full col-span-6 md:col-span-4 col-start-2"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex col-span-8 md:col-span-4 col-start-1 md:col-start-5 w-full h-full flex-col gap-2 items-center justify-center  p-4"
        >
          <h1 className="text-4xl font-bold w-full text-center md:text-left">
            {features.items.at(3).name}
          </h1>
          <p className="text-lg font-light w-full text-center md:text-left max-w-xs">
            {features.items.at(3).description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex md:hidden col-span-8 md:col-span-4 col-start-1 md:col-start-5 w-full h-full flex-col gap-2 items-center justify-center  p-4"
        >
          <h1 className="text-4xl font-bold w-full text-center md:text-left">
            {features.items.at(3).name}
          </h1>
          <p className="text-lg font-light w-full text-center md:text-left max-w-xs">
            {features.items.at(3).description}
          </p>
        </motion.div>
        <Image
          src={features.items.at(3).icon}
          alt=""
          width={500}
          height={500}
          loading="lazy"
          className="block md:hidden h-full col-span-6 md:col-span-4 col-start-2"
        />
        {/* Hide and show ends */}
      </div>
    </>
  );
};

export default Features;
