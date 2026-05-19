const PricingCard = ({pricing}) => {
    const {planName, price, information, features} = pricing;
console.log(pricing);
    
    return (
        <div className="border border-b-blue-400 bg-amber-400 rounded-2xl p-4">
            {/* card header */}
            <div>
                <h1 className="text-4xl font-bold">{planName}</h1>
                <h4 className="text-3xl">{price}</h4>
            </div>
            {/* card body */}
            <div className="bg-blue-500 p-6 rounded-lg mt-5 text-2xl">
                <p>{information}</p>
                {
                    features.map(feature => )
                }


            </div>

      
            
        </div>
    );
};

export default PricingCard;