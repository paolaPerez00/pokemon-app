import Head from "next/head"
import {  ReactNode } from "react"
import { Navbar } from "../ui"

type Props = {
    children: ReactNode,
    title?: string
}

export const Layout = ({children, title}:Props) => {
  return (
   <>
    <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name="author" content="Gina Pérez"></meta>
        <meta name="description" content="Información sobre el pokemón XXXX"></meta>
        <meta name="keywords" content="XXXX, pokemon, pokedex"></meta>
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


