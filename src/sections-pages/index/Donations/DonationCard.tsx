import React from 'react';

interface DonationCardProps {
    amount: number;
    message: string;
    donator: string;
    dateTime: string; // Nueva propiedad para fecha y hora
}

const DonationCard: React.FC<DonationCardProps> = ({ amount, message, donator, dateTime }) => {
    return (
        <article className="bg-white w-full flex justify-center text-center shadow-lg flex-col items-center max-w-[400px] h-[160px] rounded-[10px] p-3">
            <span className="font-bold text-[#14C42E] text-3xl">+{amount} Kr</span>
            <h5 className="font-semibold text-xl">"{message}"</h5>
            <span className="text-sm">-{donator}</span>
            <span className="text-xs text-gray-500 mt-2">{dateTime}</span> {/* Mostrar fecha y hora */}
        </article>
    );
};

export default DonationCard;
