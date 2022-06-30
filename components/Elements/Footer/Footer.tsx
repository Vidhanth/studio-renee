import Link from "next/link";
import React from "react";

import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";

export const Footer = () => {
  return (
    <div className="bg-primary py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-8">
          <h4 className="font-montserrat text-[2.75rem] uppercase italic">
            Get in touch
          </h4>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="x-flex">
              <div className="space-y-6 font-light text-gray-800">
                <p className="font-bold">
                  Ph:
                  <a href="tel:9901897130">+91 9901897130</a> /{" "}
                  <a href="tel:9448381292">+91 8747844664</a>​
                </p>

                <p className="font-bold">
                  <a href="mailto:info@tranquilspaces.co.in">
                    studioreneedesigns@gmail.com
                  </a>
                </p>

                <p>
                  Studio Renee <br />
                  17, 3rd Cross, N.S Iyengar Street, Seshadripuram, <br />
                  Bengaluru, Karnataka 560020
                </p>
              </div>
              <div className="x-ml-6 x-flex flex-col items-center justify-center">
                <div className="space-x-4 mt-6 flex">
                  <a
                    href="//instagram.com/studio_renee_/"
                    target="_blank"
                    className="block"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="//facebook.com/StudioReneee/ "
                    target="_blank"
                    className="block"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="//linkedin.com/company/studio-renée/"
                    target="_blank"
                    className="block"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-6 lg:mt-0">
              <div className="flex flex-col space-y-3 font-montserrat">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </div>

          <div className="font-light text-gray-400">© 2022 by Studio Renée</div>
        </div>
      </div>
    </div>
  );
};
