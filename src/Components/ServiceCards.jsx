import React from 'react';

const ServiceCards = () => {
    const data = [
        {
            icon: "https://click-pe.in/images/clickpe_wallet.png",
            name: "Paymine Wallet",
            description: "Paymine uses digital wallet technology to allow users to quickly and easily make transactions."
        },
        {
            icon: "https://click-pe.in/images/mobile.png",
            name: "Mobile Recharge",
            description: "You can easily access online mobile recharge in just a few seconds. All the information about the plans and special offers is on our portal."
        },
        {
            icon: "https://click-pe.in/images/dth.png",
            name: "DTH Recharge",
            description: "Paymine provides DTH Recharge without any hassle. Complete your customer’s requirements by browsing plans on our portal."
        },
        {
            icon: "https://click-pe.in/images/online_payment.png",
            name: "Online Payment",
            description: "No need to waste your time in long queues for paying utility bills. Electricity, water, and gas bills are extremely easy to handle with DMT."
        },
        {
            icon: "https://click-pe.in/images/pancard.png",
            name: "Pancard",
            description: "At DMT, we help people apply for new PAN cards, request duplicates, make corrections, and more related services."
        },
        {
            icon: "https://click-pe.in/images/wallet.png",
            name: "Wallet",
            description: "Wallet helps you transact with others easily and store funds using our user-friendly portal."
        },
        {
            icon: "https://click-pe.in/images/insurance.png",
            name: "Insurance",
            description: "Get essential health insurance at the best rates through our portal."
        },
        {
            icon:"https://click-pe.in/images/credit.png",
            name: "Credit Card",
            description: "Apply for a credit card online and get the best deals on our portal."
        },
        {
            icon: "https://click-pe.in/images/lightbulb.png",
            name:"BBPS",
            description: "Bharat Bill Payment System (BBPS) simplifies the bill payment process and improves payment security and speed. Now you can pay utilities (Gas, Electricity, Water, DTH) and Telecom Bills."
        },
        {
            icon: "https://click-pe.in/images/matm.png",
            name:"MATM",
            description: "The problems faced by the people of rural and semi- urban areas where there are no ATM machines, we provide them with this Micro ATM machine. By becoming our partner you can help your customers in making basic financial transactions and money withdrawal."
        },
        {
            icon: "https://click-pe.in/images/life_insurance.png",
            name:"LIC",
            description: "LIC provided protection against critical illness.Now you can pay your premium online through Paymine outlets, anytime & anywhere from the comfort of your way."
        },
        {
            icon: "https://click-pe.in/images/travel.png",
            name:"Travel",
            description: "Get best discounts and deals on domestic flights booking around the world. Book air tickets, buses, trains, hotels with Paymine to your favourite Destination in worldwide"
        },
        {
            icon: "https://click-pe.in/images/fastag.png",
            name:"Fastag",
            description: "Paymine have online FasTag Recharge facilities and the recharge can be done by visiting DMT outlet available in your area."
        },
        {
            icon: "https://click-pe.in/images/gas.png",
            name:"Gas",
            description: "We make your experience the easiest, no gas bills wouldn't pile up in your head anymore. Now you can seamlessly pay your gas bill online before the due date by visiting your authorized DMT retail outlet."
        },
    ];

    return (
        <div className="container mx-auto py-4 md:px-36 px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data.map((item, index) => (
                    <div className="flex items-center  borderrounded p-4 py-16 shadow-gray-400 hover:shadow-md border-[1px]  border-gray-400 hover:shadow-[#257180]  bg-[rgba(148,189,255,0.32)] hover:scale-105 transition-all"  key={index}>
                        <img className="w-16 h-16 mr-4" src={item.icon} alt={item.name} />
                        <div>
                            <h2 className=" text-blue-950 text-2xl font-semibold">{item.name}</h2>
                            <p className="text-blue-900 text-lg">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
