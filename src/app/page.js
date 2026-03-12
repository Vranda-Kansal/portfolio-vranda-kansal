"use client";

import Lottie from "lottie-react";
// CORRECT ✅
import girlWaving from "../../public/hello.json";

export default function Home() {
  return (
    <>
      <div className="bg-background fixed inset-0 -z-10" />
      <main className="relative min-h-screen">
        <Lottie
          animationData={girlWaving}
          loop={true}
          autoplay={true}
          className="w-[30%] absolute m-auto -bottom-18 right-0 left-0"
        />
      </main>
    </>
  );
}
