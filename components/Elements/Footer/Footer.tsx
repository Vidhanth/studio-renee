import Link from "next/link";
import React from "react";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";

export const Footer = () => {
  return (
    <div className="bg-primary py-14 px-7 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8">
          <h4 className="text-[2.75rem] font-bold uppercase italic">
            Get in touch
          </h4>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="x-flex">
              <div className="space-y-6 font-light text-gray-100">
                <p className="font-bold">
                  Ph:
                  <a href="tel:9901897130"> +91 9901897130</a>
                </p>

                <p className="font-bold">
                  <a href="mailto:studioreneedesigns@gmail.com">
                    studioreneedesigns@gmail.com
                  </a>
                </p>

                <p>
                  Studio Renée <br />
                  No. 89/2, 2nd floor <br />
                  East Anjaneya Temple Road, Basavanagudi <br />
                  Bengaluru 560004
                </p>
              </div>
              <div className="x-ml-6 x-flex flex-col items-center justify-center">
                <div className="space-x-4 mt-6 flex">
                  <a
                    href="//instagram.com/studio_renee_/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="//facebook.com/StudioReneee/ "
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="//linkedin.com/company/studio-renée/"
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-6 lg:mt-0">
              <div className="flex flex-col space-y-3">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
          </div>

          <div className="font-light text-gray-400">© 2022 by Studio Renée</div>
        </div>
      </div>
    </div>
  );
};
