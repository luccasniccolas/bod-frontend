import AuthForm from './page';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={montserrat.className}>
        <AuthForm />
        {children}
        </body>
        </html>
    );
}