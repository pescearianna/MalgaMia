import {z} from 'zod';

const userSchema = z.object({
    email: z.string().min(2).max(100),
    password: z.string().min(2).max(100),
    role: z.enum(['malga','client'])
})

const userLogIn = z.object({
    email: z.string().min(2).max(100),
    password: z.string().min(2).max(100)
})

export function validateUser(newUser){
    return userSchema.safeParse(newUser);
}

export function validateUserLogIn(userLog){
    return userLogIn.safeParse(userLog)
}
