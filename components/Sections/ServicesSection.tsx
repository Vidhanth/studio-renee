import { FadeInWhenVisible } from "@/transitions";
import { CheckCircleIcon } from "@heroicons/react/outline";

const services = [
  "Restaurant Interiors",
  "Office Interiors",
  "Retail Interiors",
  "Home Interiors",
];

export const ServicesSection = () => {
  return (
    <section className="py-11 max-w-6xl mx-auto">
      <div className="text-center text-4xl font-medium mb-11">What We Offer</div>
      <div className="grid grid-cols-2 mb-3">
        <div className="sm:flex hidden justify-center">
          <ul className="space-y-5">
            {services.slice(0, 2).map((service, index) => {
              return <ListItem key={index} name={service} />;
            })}
          </ul>
        </div>
        <div className="sm:flex hidden justify-center">
          <ul className="space-y-5">
            {services.slice(2, 4).map((service, index) => {
              return <ListItem key={index} name={service} />;
            })}
          </ul>
        </div>
        <div className="sm:hidden w-screen ml-5 block">
          <ul className="space-y-5">
            {services.map((service, index) => {
              return <ListItem key={index} name={service} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

type ListItemProps = {
  name: string;
};

const ListItem = ({ name }: ListItemProps) => {
  return (
    <FadeInWhenVisible delay={0.25 * services.indexOf(name)}>
      <div className="flex flex-row items-center">
        <CheckCircleIcon height={30} className="text-gray-500 flex-shrink-0" />
        <h2 className="text-xl sm:text-2xl pl-3">{name}</h2>
      </div>
    </FadeInWhenVisible>
  );
};
