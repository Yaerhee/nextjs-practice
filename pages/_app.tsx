// _app.ts 렌더링 -> index.tsx
import Navbar from "../components/navbar";

// Navbar 를 기본 App / header 를 입힌 것처럼 옮겨와서 렌더링하게 함!
export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
        )
}

// Next.js 에서는 global css import 불가능 -> 모듈 or 각 컴포넌트 별로!