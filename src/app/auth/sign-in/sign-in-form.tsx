'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useFormState } from '@/hooks/use-form-state'


import { signInWithEmailAndPassword } from './actions'
import Image from 'next/image'

export default function SignInForm() {
  const router = useRouter()
  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      router.push('/')
    },
  )

  return (
    <div>
      <Image src="/logo.svg" alt='gym logo' width={270} height={117} />
      <h1 className='font-bold text-2xl mt-8 mb-8 text-center'>Seja bem vindo</h1>
      <div className="space-y-4 max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-4
  "
        >
          {success === false && message && (
            <Alert variant="destructive">
              <AlertTriangle className="size-4" />
              <AlertTitle>Sign in failed!</AlertTitle>
              <AlertDescription>
                <p>{message}</p>
              </AlertDescription>
            </Alert>
          )}

          <div className=" space-y-1">
            <Label htmlFor="email">E-mail</Label>
            <Input name="email" type="email" id="email" />
            {errors?.email && (
              <p className="text-sm font-medium text-red-500 dark:text-red-400">
                {errors.email[0]}
              </p>
            )}
          </div>
          <div className=" space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input name="password" type="password" id="password" />

            {errors?.password && (
              <p className="text-xs font-medium text-red-500 dark:text-red-400">
                {errors.password[0]}
              </p>
            )}
            <Link
              href="/auth/forgot-password"
              className="text-xs font-medium text-foreground hover:underline"
            >
              Forgot your password?
            </Link>
          </div>

          {/* <Button className="w-full dark:bg-red-600 dark:text-zinc-950 font-semibold" type="submit"  disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Sign in '
            )}
          </Button> */}
            <Link  href="/" className={buttonVariants({
            variant: 'default',
            className: "w-full dark:bg-red-600 dark:text-zinc-950 font-semibold"
          })}>
            Login
          </Link>
          {/* <Link
            href="/auth/sign-up"
            className={buttonVariants({
              variant: 'link',
              className: 'w-full',
              size: 'sm',
            })}
            type="submit"
          >
            Create new account
          </Link> */}
        </form>
      </div>
    </div>
  )
}
