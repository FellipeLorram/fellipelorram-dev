import { ContactFormSchema } from '@/lib/schemas/contactFormSchema';
import nodemailer from 'nodemailer';



export async function POST(req: Request) {
    try {

        const body = await req.json();
        const { name, email, message } = ContactFormSchema.parse(body);

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'fellipelorram@gmail.com',
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: 'fellipelorram@gmail.com',
            to: 'fellipelorram@gmail.com',
            subject: 'Contato pelo site',
            text: `Nome: ${name} \n Email: ${email} \n Mensagem: ${message}`,
        };

        await transporter.sendMail(mailOptions);

    } catch (error: any) {
        console.error('Error sending email:', error.message);
    }

    return new Response(JSON.stringify({}))
}
