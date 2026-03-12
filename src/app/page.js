"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate } from "motion/react";
import Lottie from "lottie-react";
import girlWaving from "../../public/hello.json";

export default function Home() {
  const [scope, animate] = useAnimate();
  const lottieRef = useRef(null);

  const handleLottieComplete = async () => {
    // Lottie animation is fully done — now slide to top right
    await animate(
      scope.current,
      { y: -270, x: 420, scale: 1.2 },
      { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    );

    // Sits static at top right forever after this
  };

  return (
    <>
      <div className="bg-background fixed inset-0 -z-10" />
      <div className="overflow-x-hidden w-full">
        <motion.main
          ref={scope}
          className="relative min-h-screen"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={girlWaving}
            loop={false}
            autoplay={true}
            onComplete={handleLottieComplete}
            className="w-[30%] absolute mx-auto -bottom-18 right-0 left-0"
          />
        </motion.main>
      </div>
    </>
  );
}
