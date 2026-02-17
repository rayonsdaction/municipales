import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        imageUrl: z.string().url(),
      })
    }),
    communesPage: defineCollection({
      source: 'communes/*.md',
      type: 'page',
      schema: z.object({
        name: z.string(),
        shortName: z.string(),
        line: z.number(),
        from: z.string(),
        to: z.string(),
        description: z.string(),
        trafic: z.string(),
        cover: z.string(),
        lien: z.string(),
        listes: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              questionnaire: z.string(),
            })
        ),
      })
    }),
    voiesCyclablesGeojson: defineCollection({
      source: 'communes/*.json',
      type: 'page',
      schema: z.object({
        type: z.enum(['FeatureCollection']),
        features: z.array(
          z.union([
            z.object({
              type: z.enum(["Feature"]),
              properties: z.object({
                id: z.string().optional(),
                line: z.number(),
                name: z.string(),
                status: z.enum(["planned", "postponed", "variante-postponed", "done", "wip", "variante", "tested", "unknown", "expected"]),
                type: z.enum([
                  "bidirectionnelle",
                  "bilaterale",
                  "voie-bus",
                  "voie-bus-elargie",
                  "velorue",
                  "voie-verte",
                  "bandes-cyclables",
                  "zone-de-rencontre",
                  "aucun",
                  "inconnu"
                ]),
                link: z.string().optional(),
                quality: z.enum(["satisfactory", "unsatisfactory"]),
                text: z.string().optional(),
                doneAt: z.string().optional(),
              }),
              geometry: z.object({
                type: z.enum(["LineString"]),
                coordinates: z.array(z.tuple([z.number(), z.number()])),
              }),
            }),
            z.object({
              type: z.enum(["Feature"]),
              properties: z.object({
                type: z.enum(["perspective"]),
                name: z.string(),
                line: z.number(),
                imgUrl: z.string().url(),
              }),
              geometry: z.object({
                type: z.enum(['Point']),
                coordinates: z.tuple([z.number(), z.number()])
              }),
            }),
            z.object({
              type: z.enum(["Feature"]),
              properties: z.object({
                type: z.enum(['danger']),
                name: z.string(),
                description: z.string(),
                danger: z.string(),
                engagement: z.string(),
                liste: z.string()
              }),
              geometry: z.object({
                type: z.enum(['Point']),
                coordinates: z.tuple([z.number(), z.number()]),
              }),
            })
          ])
        )
      })
    })
  }
});
