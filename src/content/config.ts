import { defineCollection, z } from "astro:content";

const presentation = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})

const programmingLenguages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        learned: z.string(),
    })
})

const technologies = defineCollection({
    type: 'content',
    schema: z.object({

    })
})

export const collections = {
    presentation: presentation,
    programmingLenguages: programmingLenguages,
    technologies: technologies,
}