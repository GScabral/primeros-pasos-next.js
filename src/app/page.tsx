"use client"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { ListComponent } from "./component/ListComponent"
import { getDataML } from "../util/api-ml"


export default  function Home() {




  return (
    <div style={{ textAlign: 'center' }}>
      <Head>
        <title>aca un titulo</title>
      </Head>
      <h1>Ecommerce de ejemplo</h1>
      <h3>Productos destacados</h3>


      <ListComponent />
      <Link href={"/list"}>
        Ver Productos
      </Link>

    </div>
  )
}


// el nuevo sistema implementado desde la version 13 cambia las forma de hacer getStaticProps ahora 
//ahora se usa la funcion async directamente en el componente
