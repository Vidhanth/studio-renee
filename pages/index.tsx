import {
  WorkSection,
  CarouselSection,
  QuoteSection,
  HeadingSection,
  ServicesSection
} from "@/components/Sections";
import { ProjectService } from "@/services";
import type { NextPage } from "next";
import { Head } from "@/components/Head";
import { DefaultLayout } from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head />
      <CarouselSection />
      <HeadingSection heading="Classy and Elegant Commercial Interiors and Home Interiors"/>
      <WorkSection projects={ProjectService.getHomePageProjects()} />
      <QuoteSection      
        quote="Simplicity is the ultimate sophistication"
        author="Leonardo Da Vinci"
      />
      <ServicesSection/>
    </DefaultLayout>
  );
};

export default Home;
