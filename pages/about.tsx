import Navbar from "../components/navbar";
import Head from "next/head";
import Title from "../components/Title";

export default function About() {
    return (
        <div>
            <Head>
                <Title title="About" />
            </Head>
            <h1>About</h1>
        </div>
    )
}