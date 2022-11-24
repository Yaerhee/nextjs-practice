import Navbar from "../components/navbar";
import Head from "next/head";
import Seo from "../components/Seo";

export default function About() {
    return (
        <div>
            <Head>
                <Seo title="About" />
            </Head>
            <h1>About</h1>
        </div>
    )
}