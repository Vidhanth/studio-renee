import { WorkSection, CarouselSection, QuoteSection } from "@/components/Sections";
import { ProjectService } from "@/services";
import type { NextPage } from "next";
import { Head } from "../components/Head";
import { DefaultLayout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head description="Studio Renee Website" />
      <CarouselSection />
      <QuoteSection
        quote="Simplicity is the ultimate sophistication"
        author="Leonardo Da Vinci"
      />
      <WorkSection projects={ProjectService.query(3)} />      
    </DefaultLayout>
  );
};

export default Home;
