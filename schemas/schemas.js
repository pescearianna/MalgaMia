import { z } from 'zod';

const malgaSchema = z.object({
  name: z.string().min(2).max(100),
  region: z.string().min(2).max(100),
  province: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
  high_mt: z.number().positive(),
  geo: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180)
  }),
  accessibility: z.object({
    with_car: z.boolean(),
    walking_time: z.number().positive(),
    difficulty: z.enum(['facile', 'media', 'difficile', 'Turistico'])
  }),
  services: z.object({
    food: z.boolean(),
    bed: z.boolean(),
    ebike_recharge: z.boolean()
  }),
  contacts: z.object({
    tel: z.string().regex(/^\+?[1-9]\d{7,14}$/),
    web: z.string().url()
  }),
  img_url: z.string().trim().url(),
  schedule: z.object({
    start: z.string().min(2).max(20),
    end: z.string().min(2).max(20),
    aperta_ora: z.boolean()
  })
});

export default function validateMalga(malga) {
    return malgaSchema.safeParse(malga);
}


