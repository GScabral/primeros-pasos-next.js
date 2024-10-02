'use client';

import Head from "next/head";
import Link from "next/link";
import { ListComponent } from "../component/ListComponent";

const  List = () => {


    return (
        <div>
            <Head>
                <title>prpos.title</title>
            </Head>
            <h2>Soy la pagina de products</h2>
            <ListComponent  />
            <Link href="/">
                <a>Ir a la home </a>
                </Link>
        </div>
    )
}

export default List;

