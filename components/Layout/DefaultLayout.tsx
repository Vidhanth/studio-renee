import React from "react";

import { Footer, Navbar } from "@/components/Elements";
import { FadeIn } from "@/transitions";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="min-h-screen subpixel-antialiased">
      <Navbar />

      <FadeIn>{children}</FadeIn>

      <Footer />
    </div>
  );
};
