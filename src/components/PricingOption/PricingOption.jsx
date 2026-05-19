import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  // console.log(pricingData);

  return (
    <div>
      <h2 className="text-3xl text-amber-500 text-center font-bold">
        Get Our Membership
      </h2>

      <div>
        {
        pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}>

        </PricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingOption;
