import { Suspense } from "react";
import Navbar from "./components/Navbar";
import PricingOption from "./components/PricingOption/PricingOption";
import ResultChart from "./components/ResultChart";

const pricingPromise = fetch("PricingData.json").then((response) =>
  response.json()
);
function App() {
  return (
    <>
      <header>
        <Navbar />
        
      </header>
      <main>
        <Suspense
          fallback={
          <span className="loading loading-spinner text-error"></span>
          }>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
