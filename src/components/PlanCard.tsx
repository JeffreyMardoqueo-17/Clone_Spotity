import React from 'react';

interface PlanCardProps {
    name: string; // (Básico, Medio o Premium)
    description: string; // Descripción breve del plan
    price: string; // Precio del plan
    features: string[]; // Lista de características del plan
}

const PlanCard: React.FC<PlanCardProps> = ({ name, description, price, features }) => {
    return (
        <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-center">{name}</h3>
            <p className="text-gray-400 mb-4 text-center">{description}</p>
            <div className="text-center text-4xl font-extrabold text-[#f77441] mb-4">{price}</div>
            <ul className="mb-6 space-y-2 text-sm">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <span className="text-[#f77441] font-bold">✔</span>&nbsp;{feature}
                    </li>
                ))}
            </ul>
            <button className="bg-[#f77441] text-white rounded-full px-4 py-2 hover:bg-[#ff8b61] transition-all duration-300">
                Seleccionar Plan
            </button>
        </div>
    );
};

export default PlanCard;
