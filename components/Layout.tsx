import Navbar from "./navbar";
import Head from 'next/head'


export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Navbar />
            <div>{ children }</div>
        </>
    )
}