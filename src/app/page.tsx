"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Page() {
  const [showCard, setShowCard] = useState<boolean>(false);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    timeouts.push(setTimeout(() => {
      setShowCard(true);
    }, 1000));

    () => { timeouts.forEach((t) => { clearTimeout(t); }); };
  }, []);

  return (
    <div className="flex min-h-screen justify-center relative z-0">
      <div className={`h-full w-full absolute bg-center bg-cover z-[-1] duration-1000 transition-opacity ${showCard ? "opacity-50" : "opacity-100"}`} style={{
        backgroundImage: "url(https://i.kek.sh/U8uk91yhEaE.png)",
      }} />

      <div className={`z-10 content-center delay-300 transition-opacity duration-500 ${showCard ? "opacity-100" : "opacity-0"}`}>
        <div className="flex w-full mb-4 shadow-xl rounded-sm px-10 py-8 relative">

          <div className="h-full rounded-sm w-full opacity-85 -ml-10 -mt-8 absolute bg-center bg-cover z-[-1] bg-[#0c1325]" />

          <div className="flex-1 my-auto">
            <div
              style={{ backgroundImage: "url(/icon.jpg)" }}
              className="w-[150px] h-[150px] bg-cover ml-auto rounded-md z-10 relative"
            />
          </div>

          <div className="flex-none w-[2px] h-[150px] bg-[rgb(88,144,206)] mx-4" />

          <div className="text-left my-auto flex-1">
            <h1 className="text-lg font-bold">retouching</h1>
            <h2 className="text-lg">web developer</h2>

            <div className="flex justify-start space-x-2 mt-2">
              <Link href="https://anilist.co/user/cpp/" target="_blank">
                <Image
                  width={32}
                  height={32}
                  src="https://anilist.co/img/icons/favicon-32x32.png"
                  className="rounded-lg"
                  alt="anilist"
                />
              </Link>

              <Link href="https://letterboxd.com/kessokuband/" target="_blank">
                <Image
                  width={32}
                  height={32}
                  src="https://s.ltrbxd.com/static/img/touch-icon-192x192-lO1g3Ot4.png"
                  alt="letterboxd"
                  className="rounded-lg"
                />
              </Link>

              <Link href="https://github.com/retouching" target="_blank">
                <Image
                  width={32}
                  height={32}
                  src="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg"
                  alt="github"
                  className="rounded-lg invert"
                />
              </Link>

              <Link href="mailto:kessokubandstarry@proton.me">
                <Image
                  width={32}
                  height={32}
                  src="https://i.kek.sh/U7uhViw8BQ8.png"
                  alt="email"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
