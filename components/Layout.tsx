import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div>{ children }</div>
        </>
    )
}