"use client"

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea';
import { ContactFormSchema, ContactFormValues } from '@/lib/schemas/contactFormSchema';
import { Circle, CircleDashed } from 'lucide-react';

interface Props {
    onSubmit: (data: ContactFormValues) => void;
}

export function ContactForm({ onSubmit }: Props) {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full  ">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='flex items-start flex-col'>
                            <FormLabel className='text-slate-300'>Your Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Some Beautiful Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='flex items-start flex-col'>
                            <FormLabel className='text-slate-300'>Your Email</FormLabel>
                            <FormControl>
                                <Input type='email' placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className='flex items-start flex-col'>
                            <FormLabel className='text-slate-300'>Your Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Let's work together!"  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    className='w-full'
                    type="submit"
                    disabled={form.formState.isSubmitting}
                >
                    {form.formState.isSubmitting && (
                        <>
                            <CircleDashed className='animate-spin mr-2 stroke-slate-400' strokeWidth={2} size={20} />
                        </>
                    )}
                    Submit
                </Button>
            </form>
        </Form>
    )
}
