import Head from "next/head"
import { ReactNode } from "react"
import { Navbar } from "../ui"

type Props = {
    children: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location 

export const Layout = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Gina Pérez"></meta>
                <meta name="description" content={`Información sobre el pokemón ${title}`}></meta>
                <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
            </Head>

            <Navbar></Navbar>

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}


