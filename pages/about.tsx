import { NextPage } from "next";

import { Head } from "@/components/Head";
import { DefaultLayout } from "@/components/Layout";
import { DesignerService } from "@/services";
import { FadeInWhenVisible } from "@/transitions";
import { Designer } from "@/types";

type DesignerCardProps = {
  designer: Designer;
};

type AboutProps = {
  designers: Designer[];
};

export const getStaticProps = async () => {
  const designers = DesignerService.query();

  return {
    props: {
      designers,
    },
  };
};

const About: NextPage<AboutProps> = ({ designers }) => {
  return (
    <DefaultLayout>
      <Head
        title="About"        
      />

      <main className="mx-auto mt-11 mb-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="font-montserrat text-3xl lg:text-[2.5rem]">
            Our Philosophy
          </h1>

          <div className="mt-4 space-y-4 text-justify font-light text-gray-600 md:mt-10">
            At Renée, we believe in giving life to ideas that are joyful and
            refreshing as a reflection of everything we stand for as designers.
            Each design is carefully curated in perfect harmony by indulging the
            clients in what they love with a touch of our design aesthetic to
            give life to designs that you are bound to love. We, as a team, hope
            that our enthusiasm and passion help us in consistently delivering
            exhilarating and utilitarian ideas and we forward to accomplish our
            promise as you accompany us on this journey!
          </div>
        </div>

        <div className="mt-11">
          <h1 className="font-montserrat text-3xl lg:text-[2.5rem]">
            Our Team
          </h1>
          <div className="mt-4 space-y-12 md:mt-10">
            {designers.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

const DesignerCard = ({ designer }: DesignerCardProps) => {
  return (
    <div className="grid grid-cols-12 md:gap-12">
      <div className="col-span-12 md:col-span-4 lg:col-span-3 h-full w-full flex items-center">
        <FadeInWhenVisible className="aspect-w-1 aspect-h-1 w-full relative">
          <img
            src={designer.photo}
            alt={designer.name}
            className="object-cover rounded-full"
          />

          <div className="absolute inset-0"></div>
        </FadeInWhenVisible>
      </div>

      <div className="col-span-12 mt-6 md:col-span-8 md:mt-0 lg:col-span-9">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
          <span className="text-gray-800 font-semibold text-2xl">
            {designer.name} -{" "}
          </span>
          <span className="text-lg font-light text-gray-600 tracking-widest">
            {" "}
            {designer.role}
          </span>
        </div>

        <p className="mt-6 text-justify font-light text-gray-800">
          {designer.about}
        </p>
      </div>
    </div>
  );
};

export default About;
