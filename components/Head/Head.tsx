import NextHead from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = "", description = "Commercial and Home Interiors by Professional Architects in Bangalore. Classy and aesthetic designs for your space." }: HeadProps = {}) => {
  const defaultTitle =
    "Studio Renée - Commercial, Retail, Office and Home Interiors";

  return (
    <NextHead>
      <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
      <meta
        name="keywords"
        content="interiors, architecture, home, commercial, design, interior design, commercial designer, commercial interior, home designer, home interior, modern interior design, interior architect, design architects, bangalore, india, interior designer bangalore"
      />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
