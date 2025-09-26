'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a course description from a given title and keywords.
 *
 * @exports generateCourseDescription - An async function that takes CourseDescriptionInput as input and returns CourseDescriptionOutput.
 * @exports CourseDescriptionInput - The input type for the generateCourseDescription function.
 * @exports CourseDescriptionOutput - The return type for the generateCourseDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CourseDescriptionInputSchema = z.object({
  title: z.string().describe('The title of the course.'),
  keywords: z.string().describe('Keywords related to the course content, separated by commas.'),
});
export type CourseDescriptionInput = z.infer<typeof CourseDescriptionInputSchema>;

const CourseDescriptionOutputSchema = z.object({
  description: z.string().describe('A compelling course description generated from the title and keywords.'),
});
export type CourseDescriptionOutput = z.infer<typeof CourseDescriptionOutputSchema>;

export async function generateCourseDescription(input: CourseDescriptionInput): Promise<CourseDescriptionOutput> {
  return generateCourseDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCourseDescriptionPrompt',
  input: {schema: CourseDescriptionInputSchema},
  output: {schema: CourseDescriptionOutputSchema},
  prompt: `You are an experienced curriculum developer. Generate an engaging and informative course description based on the provided title and keywords.

Title: {{{title}}}
Keywords: {{{keywords}}}

Course Description:`,
});

const generateCourseDescriptionFlow = ai.defineFlow(
  {
    name: 'generateCourseDescriptionFlow',
    inputSchema: CourseDescriptionInputSchema,
    outputSchema: CourseDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
