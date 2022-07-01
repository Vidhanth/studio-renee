import NextHead from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = "", description = "Professional Architects and Interior Designers based in Bangalore. We provide aesthetic designs for your dream home and strive for complete customer satisfaction." }: HeadProps = {}) => {
  const defaultTitle =
    "Studio Renee - Affordable Interiors and Architecture Solutions Bangalore ";

  return (
    <NextHead>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta
        name="keywords"
        content="interiors, architecture, home, commercial, design, interior design, commercial designer, commercial interior, home designer, home interior, modern interior design, interior architect, design architects, bangalore, india, interior designer bangalore"
      />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
