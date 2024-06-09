'use client'

import { AlertTriangle,  Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hooks/use-form-state'


import { studentRegistration } from './actions'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'


const Medidas = [
  "Circunferência de Braço",
  "Circunferência de Antebraço",
  "Circunferência de Peitoral",
  "Circunferência de Cintura",
  "Circunferência de Abdômen",
  "Circunferência de Quadril",
  "Circunferência de Coxa",
  "Circunferência de Panturrilha",
  "Dobras Cutâneas de Tríceps",
  "Dobras Cutâneas de Subescapular",
  "Dobras Cutâneas de Peitoral",
  "Dobras Cutâneas de Axilar Média",
  "Dobras Cutâneas de Supra-ilíaca",
  "Dobras Cutâneas de Abdômen",
  "Dobras Cutâneas de Coxa",
  "Dobras Cutâneas de Panturrilha",
  "Peso Corporal",
  "Altura",
  "Percentual de Gordura Corporal",
  "Massa Magra Corporal"
];
export default function RegisterExerciseForm() {
  const router = useRouter()
  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    studentRegistration,
    () => {
      router.push('/')
    },
  )

  return (
    <div className='pb-12'>
      <h1 className='font-bold text-center text-3xl mt-8 mb-8'>Avaliação física</h1>
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
          <div className='space-y-3'>
            {Medidas.map((medida, i) => (
             <div className='flex items-center justify-between' key={medida}><span>{medida}</span> <Input className='w-[300px]' type='number'/></div>
            ))}
          </div>
           
          <Link  href="/" className={buttonVariants({
            variant: 'default',
            className: "w-full dark:bg-red-600 dark:text-zinc-950 font-semibold"
          })}>
            Cadastrar Avaliação
          </Link>
        </form>
      </div>
    </div>
  )
}
