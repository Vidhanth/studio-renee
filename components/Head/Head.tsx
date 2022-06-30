import NextHead from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  const defaultTitle =
    "Studio Renee - Affordable Interiors and Architecture Solutions Bangalore ";

  return (
    <NextHead>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta
        name="keywords"
        content="interiors, architecture, home, design, interior design, home designer, home interior, modern interior design, interior architect, design architects, bangalore, india, interior designer bangalore"
      />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
