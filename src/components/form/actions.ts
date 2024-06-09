'use server'


import { z } from 'zod'

// import { signInWithPassword } from '@/http/sign-in-with-password'

const signInSchema = z.object({
  name: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
  password: z.string().min(6, { message: 'Please, provide your password.' }),
})

export async function studentRegistration(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    console.log(errors)
    return { success: false, message: null, errors }
  }

  const { name, password } = result.data

  // try {
  //   const { token } = await signInWithPassword({
  //     email,
  //     password,
  //   })

  //   cookies().set('token', token, {
  //     path: '/',
  //     maxAge: 60 * 60 * 24 * 7, // 7 days
  //   })
  // } catch (err) {
  //   if (err instanceof HTTPError) {
  //     const { message } = await err.response.json()

  //     return { success: false, message, errors: null }
  //   }

  //   console.error(err)

  //   return {
  //     success: false,
  //     message: 'Unexpected error, try again in a few minutes.',
  //     errors: null,
  //   }
  // }

  return { success: true, message: null, errors: null }
}
