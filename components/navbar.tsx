import Link from 'next/link'
import {useRouter} from "next/router";

export default function Navbar() {
    const router = useRouter()

    return (
        <nav>
            <Link href="/" style={{ color: router.pathname == "/" ? 'red' : 'blue' }}>
                Home
            {/* don't use <a> tag from 13 version! */}
            </Link>
            <Link href="/about" style={{ color: router.pathname == "/about" ? 'red' : 'blue' }}>
                About
            </Link>
        </nav>
    )
}