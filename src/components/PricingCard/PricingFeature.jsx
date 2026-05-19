import { CircleCheckBig } from "lucide-react";

const PricingFeature = ({ feature }) => {
  return (
    <p className="text-lg text-white">
      {" "}
      <CircleCheckBig />
      {feature}
    </p>
  );
};

export default PricingFeature;
