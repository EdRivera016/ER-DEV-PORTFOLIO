"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[200px] h-[280px] xl:w-[300px] xl:h-[350px] mix-blend-lighten rounded-full overflow-hidden"
        >
          <Image
            src="/assets/IMAGE.png"
            priority
            quality={100}
            fill
            alt="Profile Image"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
