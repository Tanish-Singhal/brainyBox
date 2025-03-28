import zod from 'zod';

const contentSchema = zod.object({
  title: zod.string().min(3).max(100),
  link: zod.string().url(),
  tags: zod.array(zod.string().min(1).max(20)).optional(),
  description: zod.string().max(500).optional(),
});

const updatedContentSchema = zod.object({
  title: zod.string().min(3).max(100).optional(),
  link: zod.string().url().optional(),
  tags: zod.array(zod.string().min(1).max(20)).optional(),
  description: zod.string().max(500).optional(),
});

export { contentSchema, updatedContentSchema };