import zod from 'zod';

const signupSchema = zod.object({
  username: zod.string().min(3).max(20),
  email: zod.string().email().min(6).max(30),
  password: zod.string().min(8).max(100),
});

const signinSchema = zod.object({
  email: zod.string().email().min(6).max(30),
  password: zod.string().min(8).max(100),
});

export { signupSchema, signinSchema };
