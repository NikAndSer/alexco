import { Inter, Ruslan_Display } from 'next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'styles/scss/global.scss'
import 'styles/globals.scss'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-textFont',
})

const ruslan = Ruslan_Display({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-titleFont',
})

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.lang} className={`${inter.variable} ${ruslan.variable}`}>
            <body>
                <Navbar lang={params.lang} />
                {children}
                <Footer lang={params.lang} />
            </body>
        </html>
    )
}