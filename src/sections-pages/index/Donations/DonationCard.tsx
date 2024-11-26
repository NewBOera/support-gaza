import React from 'react';

interface DonationCardProps {
    amount: number;
    message: string;
    donator: string;
}

const DonationCard: React.FC<DonationCardProps> = ({ amount, message, donator }) => {
    return (
        <article className="bg-white w-full flex justify-center text-center shadow-lg flex-col items-center max-w-[400px] h-[130px] rounded-[10px] p-3">
            <span className="font-bold text-[#14C42E] text-3xl">+{amount} Kr</span>
            <h5 className="font-semibold text-xl">"{message}"</h5>
            <span className="text-sm">-{donator}</span>
        </article>
    );
};

export default DonationCard;
