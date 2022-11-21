import Head from "next/head";

export default function Title({ title }: { title: string }) {
    return (
    <Head>
        <title>{title} | Next Movies</title>
    </Head>
    )
}