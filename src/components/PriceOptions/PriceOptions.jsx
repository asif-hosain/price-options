import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training equipment",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 50,
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training equipment",
                "Locker room access",
                "Group fitness classes",
                "Personal training session (1/month)"
            ]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": 80,
            "features": [
                "Access to gym facilities",
                "Cardio equipment",
                "Strength training equipment",
                "Locker room access",
                "Group fitness classes",
                "Personal training session (2/month)",
                "Sauna and spa access",
                "Nutritional counseling"
            ]
        }
    ]
    
    
    return (
        <div className="m-12">
            <h2 className="text-5xl my-5">Best Price in the Town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
            }
            </div>
        </div>
    );
};


export default PriceOptions;