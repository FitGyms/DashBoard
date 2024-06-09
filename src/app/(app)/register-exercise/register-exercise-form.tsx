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


const EXERCICIOS = [
  {
    name: "Quadriceps",
    exercicios: ["Agachamento Livre", "Leg Press", "Extensão de Perna", "Afundo"]
  },
  {
    name: "Gluteos",
    exercicios: ["Elevação de Quadril", "Agachamento", "Afundo", "Stiff Leg Deadlift"]
  },
  {
    name: "Posterior",
    exercicios: ["Stiff Leg Deadlift", "Leg Curl", "Good Mornings", "Glute Ham Raise"]
  },
  {
    name: "Biceps",
    exercicios: ["Rosca Direta", "Rosca Concentrada", "Rosca Scott", "Rosca Alternada", "Rosca Inversa", "Rosca Martelo"]
  },
  {
    name: "Panturrilha",
    exercicios: ["Elevação de Panturrilha em Pé", "Elevação de Panturrilha Sentado", "Elevação de Panturrilha", "Donkey Calf Raise"]
  },
  {
    name: "Costas",
    exercicios: ["Puxada Frontal", "Remada Curvada", "Levantamento Terra", "Remada Cavalinho"]
  },
  {
    name: "Triceps",
    exercicios: ["Supino Fechado", "Tríceps Pulley", "Tríceps Testa", "Mergulho (Dips)"]
  },
  {
    name: "Peitorais",
    exercicios: ["Supino Reto", "Supino Inclinado", "Supino Declinado", "Crucifixo", "Peck Deck"]
  }
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
      <h1 className='font-bold text-center text-3xl mt-8 mb-8'>Cadastro de  ficha do aluno</h1>
      <div className="space-y-4 max-w-5xl">
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
          <div className=' space-y-12'>
            {EXERCICIOS.map((exercicio, i) => (
            <div key={i}>
              <h2 className='font-semibold text-2xl text-center'>{exercicio.name}</h2>
              <ul className='space-y-1.5 mt-2'>
                {exercicio.exercicios.map(exer => (
                <li className='flex items-center gap-3 text-muted-foreground' key={exer}>  
                  <Checkbox /> 
                  <Label className='w-[300px]'>{exer}</Label> 
                  <Input placeholder='series' type='number'  /> 
                  <Input placeholder='repetições' type='number'  /> 
                </li>
                ))}
              </ul>
            </div>

            ))}
            <div className=''>
              <h2 className='font-semibold text-2xl text-center'>Quadríceps</h2>
              <ul className='space-y-1.5 mt-2'>
                <li className='flex items-center gap-3 text-muted-foreground'>  
                  <Checkbox /> 
                  <Label className='w-[200px]'>Agachamento</Label> 
                  <Input placeholder='series' type='number'  /> 
                  <Input placeholder='repetições' type='number'  /> 
                </li>
                <li className='flex items-center gap-3 text-muted-foreground'>  
                  <Checkbox /> 
                  <Label className='w-[200px]'>Leg Press</Label> 
                  <Input placeholder='series' type='number'  /> 
                  <Input placeholder='repetições' type='number'  /> 
                </li>
                <li className='flex items-center gap-3 text-muted-foreground'>  
                  <Checkbox /> 
                  <Label className='w-[200px]'>Afundo </Label> 
                  <Input placeholder='series' type='number'  /> 
                  <Input placeholder='repetições' type='number'  /> 
                </li>
                <li className='flex items-center gap-3 text-muted-foreground'>  
                  <Checkbox /> 
                  <Label className='w-[200px]'>Extensão de Perna</Label> 
                  <Input placeholder='series' type='number'  /> 
                  <Input placeholder='repetições' type='number'  /> 
                </li>
              </ul>
            </div>
          </div>
          <Link  href="/register-physical-assessment" className={buttonVariants({
            variant: 'default',
            className: "w-full dark:bg-red-600 dark:text-zinc-950 font-semibold"
          })}>
            Cadastrar ficha
          </Link>
        </form>
      </div>
    </div>
  )
}
