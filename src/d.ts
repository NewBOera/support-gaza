import { z } from 'zod';

export const ExampleSchema = z.object({
    question: z.string().optional(),
    answer: z.union([z.string(), z.array(z.string())]).optional(),
});
