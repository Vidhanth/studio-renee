type PropTypes = {
  quote: string;
  author: string;
};

export const QuoteSection = ({ quote = "", author = "" }: PropTypes) => {
  return (
    <section className="flex flex-row px-7 justify-center items-center py-12 bg-primary">
      <div>
        <span className="text-2xl italic">{quote + " — "}</span>{" "}
        <span className="text-xl">{author}</span>
      </div>
    </section>
  );
};
