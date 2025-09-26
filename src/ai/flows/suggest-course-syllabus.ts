'use server';

/**
 * @fileOverview A course syllabus suggestion AI agent.
 *
 * - suggestCourseSyllabus - A function that handles the course syllabus suggestion process.
 * - SuggestCourseSyllabusInput - The input type for the suggestCourseSyllabus function.
 * - SuggestCourseSyllabusOutput - The return type for the suggestCourseSyllabus function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCourseSyllabusInputSchema = z.object({
  courseTitle: z.string().describe('The title of the course.'),
  courseDescription: z.string().describe('The description of the course.'),
});
export type SuggestCourseSyllabusInput = z.infer<typeof SuggestCourseSyllabusInputSchema>;

const SuggestCourseSyllabusOutputSchema = z.object({
  syllabus: z.string().describe('The suggested course syllabus.'),
});
export type SuggestCourseSyllabusOutput = z.infer<typeof SuggestCourseSyllabusOutputSchema>;

export async function suggestCourseSyllabus(input: SuggestCourseSyllabusInput): Promise<SuggestCourseSyllabusOutput> {
  return suggestCourseSyllabusFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCourseSyllabusPrompt',
  input: {schema: SuggestCourseSyllabusInputSchema},
  output: {schema: SuggestCourseSyllabusOutputSchema},
  prompt: `You are an expert curriculum designer specializing in creating course syllabi.

You will use the course title and description to generate a detailed and comprehensive course syllabus.

Course Title: {{{courseTitle}}}
Course Description: {{{courseDescription}}}

Please provide a well-structured syllabus with clear sections, topics, and estimated durations for each topic. Include learning objectives, assessment methods, and any recommended resources.
`,
});

const suggestCourseSyllabusFlow = ai.defineFlow(
  {
    name: 'suggestCourseSyllabusFlow',
    inputSchema: SuggestCourseSyllabusInputSchema,
    outputSchema: SuggestCourseSyllabusOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
