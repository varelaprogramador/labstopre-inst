'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { DialogDescription } from '@radix-ui/react-dialog'
import { PhoneInput } from './phone-input'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useState } from 'react'
import * as fbq from '@/lib/fpixel'
import { trackLead } from '@/lib/facebook-api'

// Validação do formulário com zod
const formSchema = z.object({
  name: z.string().min(1, 'O Nome é obrigatório.'),
  email: z.string().min(1, 'O Email  é obrigatório.'),
  phone: z.string().min(1, 'O Telefone é obrigatório.'),
})

type FormData = z.infer<typeof formSchema>

export default function FormularioDialog() {
  const [isOpen, setIsOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  const handleSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        'https://api.rd.services/platform/conversions?api_key=WoxYjvgqbQDKgjQUAzNMwnRcAFLxSqCtrAdY',
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: {
              conversion_identifier: 'Conversão Formulario - HOME',
              email: data.email,
              name: data.name,
              mobile_phone: data.phone,
            },
          }),
        },
      )

      if (response.ok) {
        console.log('Dados enviados com sucesso para RD Station!')
        setIsOpen(false)
        form.reset()

        // Track lead conversion with Facebook Pixel
        fbq.lead()

        // Track lead with Facebook Conversion API
        await trackLead({
          email: data.email,
          phone: data.phone,
        })

        toast.success('Dados enviados com sucesso!')
      } else {
        console.error('Erro ao enviar os dados:', response.statusText)
        toast.error('Erro ao enviar os dados!')
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error)
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(!isOpen)
        form.reset()
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="p-6 bg-green-600 hover:bg-green-700"
        >
          Quero adquirir agora!
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Preencha o Formulário</DialogTitle>
          <DialogDescription className="text-sm">
            Para renovar sua assinatura, preencha o formulário
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Digite seu nome aqui ... " />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Digite seu e-mail aqui ... "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      defaultCountry="BR"
                      placeholder="(00) 00000-0000"
                      value={field.value || ''}
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onChange={(value: any) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" className="w-full" variant="default">
                Enviar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
