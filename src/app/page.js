"use client";

import Lottie from "lottie-react";
import girlWaving from "../../public/hello.json";

export default function Home() {
  return (
    <div>
      <div className=" flex min-h-screen justify-center items-end">
        <Lottie
          animationData={girlWaving}
          loop={false}
          autoplay={true}
          className="w-[20vw]"
        ></Lottie>
      </div>
    </div>
  );
}
