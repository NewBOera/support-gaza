import React, { useEffect } from 'react';
import { z } from 'zod';
import { getCollection } from 'astro:content';

// import { FamousDonatorSchema } from '../../../d';

// type FamousDonator = z.infer<typeof FamousDonatorSchema>;

// interface FamousDonatorProps {
//     donator: FamousDonator
// }

// export const FamousDonatorCard: React.FC = () => {
//     return (
//         <article className="bg-white p-3 h-[550px] w-full max-w-[340px] shadow-md rounded-[10px]">
//             <div className="w-full h-[85%]">
//                 <img src="/public/assets/donators/1.png" className="object-contain h-full w-full" alt="" />
//             </div>
//             <div className="flex flex-col -mt-4 items-center">
//                 <img src="/public/assets/donators/up.png" className="w-[35px] h-[35px]" alt="" />
//                 <h5 className="font-bold text-center text-2xl">More info</h5>
//             </div>
//         </article>

//     );
// };

// const FamousDonatorsSwiper = () => {
//     const [donators, setDonators] = React.useState([]);

//     useEffect(() => {
//         getDonators();
//     }, []);

//     async function getDonators() {
//         const famousDonatorCollection = await getCollection('famousDonators');

//         setDonators(famousDonatorCollection);
//     }

//     return (
//         <div>
//             <DonatorCard />
//         </div>
//     );
// };
