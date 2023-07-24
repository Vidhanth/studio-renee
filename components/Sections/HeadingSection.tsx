type PropTypes = {
  heading: string;
};

export const HeadingSection = ({ heading = "" }: PropTypes) => {
  return (
    <section className="flex flex-row px-7 justify-center text-center items-center py-12 mt-6 bg-primary">
      <div>
        <h1 className="text-2xl text-white italic">{heading}</h1>
      </div>
    </section>
  );
};
