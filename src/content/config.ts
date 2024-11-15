import { defineCollection } from 'astro:content';
import { FamousDonatorSchema } from '../d';

const famousDonators = defineCollection({
    type: 'data',
    schema: FamousDonatorSchema,
});

export const collections = { famousDonators };
