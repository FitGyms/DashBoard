'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hooks/use-form-state'


import { studentRegistration } from './actions'
import Image from 'next/image'
import Link from 'next/link'

export default function StudentRegistrationForm() {
  const router = useRouter()
  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    studentRegistration,
    () => {
      router.push('/register-exercise')
    },
  )

  return (
    <div>
      <h1 className='font-bold text-center text-3xl mt-8 mb-8'>Criar Conta do aluno</h1>
      <div className="space-y-4 max-w-3xl mx-auto">
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
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="name" id="name" />
            {errors?.name && (
              <p className="text-sm font-medium text-red-500 dark:text-red-400">
                {errors.name[0]}
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

          </div>

          
          {/* <Button className="w-full dark:bg-red-600 dark:text-zinc-950 font-semibold" type="submit"  disabled={isPending}>
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Criar Usuario'
            )}
          </Button> */}
          <Link  href="/register-exercise" className={buttonVariants({
            variant: 'default',
            className: "w-full dark:bg-red-600 dark:text-zinc-950 font-semibold"
          })}>
             Criar Usuario
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
