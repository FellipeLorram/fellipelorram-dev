"use client"

import { useState } from 'react'
import { ContactForm } from './form/contactForm'
import { ContactFormValues } from '@/lib/schemas/contactFormSchema'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './ui/button'

import ContactSVG from './SVG/contactSVG'
import MessageSVG from './SVG/messageSVG'
import { AnimateWrapper } from './animateWrapper'

export function Contact() {
    const [formInView, setFormInView] = useState(true)

    async function onSubmit(data: ContactFormValues) {
        await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        setFormInView(false);
    }

    return (
        <>
            <AnimatePresence mode='wait'>
                {formInView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: 50, transition: { duration: 0.2, ease: 'easeInOut' } }}
                        className='flex flex-col items-center justify-center px-4 text-center mt-10'
                    >
                        <p className='text-slate-100 text-xl font-medium'>
                            I&apos;m always open to new opportunities and ideas.<br /> If you have a project in mind, feel free to contact me.
                        </p>
                        <div
                            className='flex flex-col-reverse md:flex-row w-full items-center justify-center'>
                            <AnimateWrapper
                                className='w-full'
                                variants={{
                                    hidden: { opacity: 0, x: -75 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <ContactForm onSubmit={onSubmit} />
                            </AnimateWrapper>
                            <AnimateWrapper
                                className='w-full'
                                variants={{
                                    hidden: { opacity: 0, x: 100 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <ContactSVG
                                    className='w-full h-full'
                                />
                            </AnimateWrapper>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                {!formInView &&
                    (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeInOut', delay: 0.2 } }}
                            exit={{ opacity: 0 }}
                            className='w-full flex flex-col items-center justify-center mt-10'
                        >
                            <p className='text-slate-100 text-xl font-medium'>
                                Thank you for your message!
                            </p>
                            <div>
                                <MessageSVG
                                    className='w-full h-full'
                                />
                            </div>
                            <Button
                                onClick={() => setFormInView(true)}
                                className='ml-4 text-sky-100 text-xl font-medium hover:text-sky-200'
                            >
                                Send another message
                            </Button>
                        </motion.div>
                    )}
            </AnimatePresence >
        </>
    )
}
