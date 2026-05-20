import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { planName, price, information, features } = pricing;
  console.log(pricing);

  return (
    <div className="border border-b-blue-400 bg-amber-400 rounded-2xl p-8">
      {/* card header */}
      <div>
        <h1 className="text-4xl font-bold">{planName}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>
      {/* card body */}
      <div className="bg-blue-500 p-6 rounded-lg mt-5 text-2xl">
        <p>{information}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))
        }
      </div>
      <button className=" bg-emerald-400 w-full py-3 px-12 mt-8 rounded-lg text-2xl text-white cursor-pointer">Subscribe</button>
    </div>
  );
};

export default PricingCard;
