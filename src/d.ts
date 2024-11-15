import { z } from 'zod';

export const FamousDonatorSchema = z.object({
    mainImage: z.string(),
    famousName: z.string(),
    quote: z.string(),
});
