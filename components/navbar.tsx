import Link from 'next/link'
import {useRouter} from "next/router";
import styles from './navbar.module.css' // style module import -> usage as Object.property

export default function Navbar() {
    const router = useRouter()

    return (
        <nav>
            {/* className 에 random text 를 추가해서 HTML return -> No Duplicates!! */}
            <Link href="/" className={`${styles.link} 
                                ${router.pathname == "/" ? styles.active : ''}`}>
                Home
            {/* don't use <a> tag from 13 version! */}
            </Link>
            <Link href="/about" className={`${styles.link} 
                                ${router.pathname == "/about" ? styles.active : ''}`}>
                About
            </Link>
        </nav>
    )
}