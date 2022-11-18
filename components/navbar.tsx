import Link from 'next/link'
import {useRouter} from "next/router";
import styles from './navbar.module.css' // style module import -> usage as Object.property

export default function Navbar() {
    const router = useRouter()

    return (
        <nav>
            <img src="/vercel.svg"/>
            <div>
                {/* todo: legacyBehavior delete */}
                <Link href="/" legacyBehavior>
                    <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about" legacyBehavior>
                    <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
            <style jsx>{`
              nav {
                display: flex;
                gap: 10px;
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
                padding-bottom: 10px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
              }

              img {
                max-width: 100px;
                margin-bottom: 5px;
              }

              nav a {
                font-weight: 600;
                font-size: 18px;
              }
              
              nav div {
                display: flex;
                gap: 10px;
              }

              .active {
                color: tomato;
              }

            `}</style>
        </nav>
    );
}