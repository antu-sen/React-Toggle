import { CircleCheckBig } from "lucide-react";

const PricingFeature = ({ feature }) => {
  return (
    <p className="text-lg text-white flex gap-2 mt-2">
      {" "}
      <CircleCheckBig />
      {feature}
    </p>
  );
};

export default PricingFeature;
