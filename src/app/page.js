"use client";

import Lottie from "lottie-react";
import girlWaving from "../../public/hello.json";
import { useState } from "react";

export default function Home() {
  const [animationDone, setAnimationDone] = useState(false);
  return (
    <div>
      <div className=" flex items-center justify-end min-h-screen overflow-hidden ">
        <div className="animate__animated animate__slideInRight mr-[15vw]">
          <Lottie
            animationData={girlWaving}
            loop={false}
            className={`w-[20vw] transition-transform duration-500 ease-out ${
              animationDone ? "scale-125" : "scale-100"
            }`}
            onComplete={() => setAnimationDone(true)}
          />
        </div>
      </div>
    </div>
  );
}
