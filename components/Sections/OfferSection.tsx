import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/Elements";
import { HeaderPartial } from "@/components/Partials";
import { FadeIn, FadeInWhenVisible } from "@/transitions";

export const OfferSection = () => {
  return (
    <section>
      <HeaderPartial>Introductory Offers!</HeaderPartial>

      <div className="space-y-6">
        <InteriorOffer />

        <ArchitectureOffer />

        <PremiumInteriorsOffer />
      </div>
    </section>
  );
};

const InteriorOffer = () => {
  const [showingLearnMore, setShowingLearnMore] = useState(false);

  return (
    <section
      id="interior-design"
      className="bg-primary lg:flex lg:flex-row-reverse"
    >
      <FadeInWhenVisible className="relative lg:h-auto lg:flex-1">
        <img
          src="/img/offers/offer-2.jpg"
          alt="Interior offer banner"
          className="lg:h-full lg:w-full lg:object-cover"
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="relative w-full pt-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10"></div>

            <div className="relative px-4 py-3 text-right text-sm font-light text-gray-100">
              © Copyright
            </div>
          </div>
        </div>

        <div className="absolute inset-0"></div>
      </FadeInWhenVisible>

      {!showingLearnMore && (
        <FadeIn className="py-8 md:py-16 lg:w-5/12 xl:py-40">
          <div className="mx-auto px-4 sm:px-8 lg:max-w-md">
            <div className="font-montserrat text-white">
              <h3 className="text-3xl font-bold uppercase lg:text-4xl lg:leading-tight">
                Interior design / renovation solutions
              </h3>

              <div className="mt-4 text-xl uppercase lg:mt-12 lg:text-2xl">
                Starting at just
              </div>

              <div className="mt-2 text-3xl lg:text-4xl">2,999/-</div>
            </div>

            <Button
              onClick={() => setShowingLearnMore(true)}
              className="mt-14"
              variant="inverse"
            >
              Learn More
            </Button>
          </div>
        </FadeIn>
      )}

      {showingLearnMore && (
        <FadeIn className="py-8 md:py-16 lg:w-6/12 xl:w-5/12">
          <div className="px-4 sm:px-8 lg:max-w-4xl lg:px-16">
            <div className="flex items-center text-gray-300">
              <button onClick={() => setShowingLearnMore(false)}>
                <ArrowNarrowLeftIcon className="h-6 w-6 transition hover:-translate-x-1 hover:transform" />
              </button>

              <h2 className="ml-3 font-montserrat font-bold uppercase leading-6 tracking-wide">
                How it works
              </h2>
            </div>

            <h3 className="mt-2 font-montserrat text-3xl leading-8 tracking-tight text-white sm:text-4xl">
              Interiors
            </h3>

            <p className="mt-6 text-xl text-gray-300">
              <span className="font-bold">Rs.2,999/-</span> for design of any
              one – kitchen/dining/bedroom/living room/foyer etc
            </p>

            <div className="mt-6 space-y-6 lg:mt-12">
              <div className="lg:flex lg:space-x-6">
                <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                  01
                </span>

                <div className="mt-3 lg:mt-0">
                  <h3 className="text-xl text-white">
                    Call Us and Discuss Your Requirements
                  </h3>

                  <ul className="mt-3 list-inside list-disc text-gray-300">
                    <li>
                      Send us the floor plan of the space you want to design.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:flex lg:space-x-6">
                <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                  02
                </span>

                <div className="mt-3 lg:mt-0">
                  <h3 className="text-xl text-white">Make Payment</h3>

                  <ul className="mt-3 list-inside list-disc text-gray-300">
                    <li>We prepare a tentative design.</li>
                    <li>Meet on a pre-appointed date and time.</li>
                  </ul>
                </div>
              </div>

              <div className="lg:flex lg:space-x-6">
                <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                  03
                </span>

                <div className="mt-3 lg:mt-0">
                  <h3 className="text-xl text-white">
                    Sit with Us, Make Any Changes Required in the Floor Plan and
                    Finalise the Design.
                  </h3>

                  <ul className="mt-3 list-inside list-disc text-gray-300">
                    <li>We handover the finalised design in 3D.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6 text-justify text-gray-300">
              <p>
                Working drawings, with all dimensions mentioned can be provided
                at additional cost.
              </p>

              <p>
                We have a team of experienced partners, who can execute the
                design for you. In such case the design amount will be
                discounted in the final invoice amount.
              </p>
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
};

const ArchitectureOffer = () => {
  const [showingLearnMore, setShowingLearnMore] = useState(false);

  return (
    <section id="architecture-solutions" className="bg-secondary lg:flex">
      <FadeInWhenVisible className="relative lg:h-auto lg:flex-1">
        <div className="lg:absolute lg:inset-0">
          <img
            src="/img/offers/offer-1.jpg"
            alt="Interior offer banner"
            className="lg:h-full lg:w-full lg:object-cover"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <div className="relative w-full pt-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10"></div>

            <div className="relative px-4 py-3 text-sm font-light text-gray-100">
              © Copyright
            </div>
          </div>
        </div>

        <div className="absolute inset-0"></div>
      </FadeInWhenVisible>

      {!showingLearnMore && (
        <FadeIn className="py-8 md:py-16 lg:w-5/12 xl:py-40">
          <div className="mx-auto px-4 sm:px-8 lg:max-w-md">
            <div className="font-montserrat text-primary">
              <h3 className="text-3xl font-bold uppercase lg:text-4xl lg:leading-tight">
                Architecture Solutions
              </h3>

              <div className="mt-4 text-xl uppercase lg:mt-12 lg:text-2xl">
                Starting at just
              </div>

              <div className="mt-2 text-3xl lg:text-4xl">14,999/-</div>
            </div>

            <Button
              onClick={() => setShowingLearnMore(true)}
              className="mt-14"
              variant="primary"
            >
              Learn More
            </Button>
          </div>
        </FadeIn>
      )}

      {showingLearnMore && (
        <FadeIn className="py-8 md:py-16 lg:w-6/12 xl:w-5/12">
          <div className="px-4 sm:px-8 lg:max-w-4xl lg:px-16">
            <div className="flex items-center text-gray-500">
              <button onClick={() => setShowingLearnMore(false)}>
                <ArrowNarrowLeftIcon className="h-6 w-6 transition hover:-translate-x-1 hover:transform" />
              </button>

              <h2 className="ml-3 font-montserrat font-bold uppercase leading-6 tracking-wide">
                How it works
              </h2>
            </div>

            <h3 className="mt-2 font-montserrat text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Architecture
            </h3>

            <p className="mt-6 text-justify text-xl text-gray-500">
              <span className="font-bold">Rs.14,999/- </span> is for 2D floor
              plan (upto 1500 sft built up area) and 2 options of elevation.
            </p>

            <div className="mt-6 space-y-6 lg:mt-12">
              <div className="lg:flex lg:space-x-6">
                <span className="font-montserrat text-4xl font-semibold text-gray-500 lg:w-12">
                  01
                </span>

                <div className="mt-3 lg:mt-0">
                  <h3 className="text-xl">
                    Call Us and Discuss Your Requirements
                  </h3>

                  <ul className="mt-3 list-inside list-disc text-gray-500">
                    <li>
                      Send us the schedule of the property for site dimensions.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:flex lg:space-x-6">
                <span className="font-montserrat text-4xl font-semibold text-gray-500 lg:w-12">
                  02
                </span>

                <div className="mt-3 lg:mt-0">
                  <h3 className="text-xl">Make Payment</h3>

                  <ul className="mt-3 list-inside list-disc text-gray-500">
                    <li>
                      We prepare a tentative 2D floor plan and 2 options for the
                      elevation, in 3D.
                    </li>

                    <li>Meet on a pre appointed date and time.</li>
                  </ul>
                </div>
              </div>

              <div className="lg:flex lg:space-x-6">
                <span className="font-montserrat text-4xl font-semibold text-gray-500 lg:w-12">
                  03
                </span>

                <div className="mt-3 lg:mt-0">
                  <h3 className="text-xl">
                    Sit with Us, Make Any Changes Required in the Floor Plan and
                    Finalise the Design.
                  </h3>

                  <ul className="mt-3 list-inside list-disc text-gray-500">
                    <li>Freeze on any one elevation.</li>

                    <li>We handover the finalised design to you.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6 text-justify text-gray-500">
              <p>
                Complete architectural consultancy can be also be provided, if
                needed by you, at Additional cost (after discounting the amount
                already paid). This involves all Working drawings like
                structural, electrical, plumbing etc. Along with inspection
                Visits to the site as required, till the completion of the
                project.
              </p>

              <p>
                We can connect you to experienced contractors, who can execute
                the project for you.
              </p>
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
};

const PremiumInteriorsOffer = () => {
  const [showingLearnMore, setShowingLearnMore] = useState(false);

  return (
    <section
      id="premium-interiors"
      className="bg-primary lg:flex lg:flex-row-reverse"
    >
      <FadeInWhenVisible className="relative lg:h-auto lg:flex-1">
        <div className="lg:absolute lg:inset-0">
          <img
            src="/img/offers/offer-3.jpg"
            alt="Interior offer banner"
            className="lg:h-full lg:w-full lg:object-cover"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <div className="relative w-full pt-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10"></div>

            <div className="relative px-4 py-3 text-right text-sm font-light text-gray-100">
              © Copyright
            </div>
          </div>
        </div>

        <div className="absolute inset-0"></div>
      </FadeInWhenVisible>

      <div className="lg:w-6/12 xl:w-5/12">
        {!showingLearnMore && (
          <FadeIn className="py-8 md:py-16 xl:py-40">
            <div className="mx-auto px-4 sm:px-8 lg:max-w-md">
              <div className="font-montserrat text-white">
                <h3 className="text-3xl font-bold uppercase lg:text-4xl lg:leading-tight">
                  Premium home interiors
                </h3>

                <div className="mt-4 text-xl uppercase lg:mt-12 lg:text-2xl">
                  Starting at just
                </div>

                <div className="mt-2 text-3xl lg:text-4xl">7,49,000/-*</div>
              </div>

              <Button
                onClick={() => setShowingLearnMore(true)}
                className="mt-14"
                variant="inverse"
              >
                Learn More
              </Button>
            </div>
          </FadeIn>
        )}

        {showingLearnMore && (
          <FadeIn className="py-8 md:py-16">
            <div className="px-4 sm:px-8 lg:max-w-4xl lg:px-16">
              <div className="flex items-center text-gray-300">
                <button onClick={() => setShowingLearnMore(false)}>
                  <ArrowNarrowLeftIcon className="h-6 w-6 transition hover:-translate-x-1 hover:transform" />
                </button>

                <h2 className="ml-3 font-montserrat font-bold uppercase leading-6 tracking-wide">
                  How it works
                </h2>
              </div>

              <h3 className="mt-2 font-montserrat text-3xl leading-8 tracking-tight text-white sm:text-4xl">
                Premium home interiors
              </h3>

              <p className="mt-6 text-xl text-gray-300">
                <span className="font-bold">Rs.7,49,000/-*</span> is for a 2BHK
                home (additional bedrooms from Rs.2,00,000/- onwards)
              </p>

              <div className="mt-6 space-y-6 lg:mt-12">
                <div className="lg:flex lg:space-x-6">
                  <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                    01
                  </span>

                  <div className="mt-3 lg:mt-0">
                    <h3 className="text-xl text-white">
                      Turnkey home solutions
                    </h3>
                  </div>
                </div>

                <div className="lg:flex lg:space-x-6">
                  <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                    02
                  </span>

                  <div className="mt-3 lg:mt-0">
                    <h3 className="text-xl text-white">
                      Made with premium and branded materials
                    </h3>

                    <ul className="mt-3 list-inside list-disc text-gray-300">
                      <li>
                        Century ply, merino/green/uni laminates, hettich
                        hardware.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:flex lg:space-x-6">
                  <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                    03
                  </span>

                  <div className="mt-3 lg:mt-0">
                    <h3 className="text-xl text-white">
                      Branded appliances for kitchen
                    </h3>
                  </div>
                </div>

                <div className="lg:flex lg:space-x-6">
                  <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                    04
                  </span>

                  <div className="mt-3 lg:mt-0">
                    <h3 className="text-xl text-white">
                      Includes loose furniture, decors, furnishings, etc
                    </h3>
                  </div>
                </div>

                <div className="lg:flex lg:space-x-6">
                  <span className="font-montserrat text-4xl font-semibold text-gray-300 lg:w-12">
                    05
                  </span>

                  <div className="mt-3 lg:mt-0">
                    <h3 className="text-xl text-white">45 days delivery</h3>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-justify text-gray-300">
                <p>
                  Can also be customised as per invidual requirements. Call for
                  complete details.
                </p>
              </div>
            </div>
          </FadeIn>
        )}
        <div className="py-2 px-4 text-right font-light text-white">
          * GST Extra
        </div>
      </div>
    </section>
  );
};
