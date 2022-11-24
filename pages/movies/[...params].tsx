import {useRouter} from "next/router";
import {GetServerSideProps, InferGetServerSidePropsType, NextPageContext} from "next";
import Seo from "../../components/Seo";

export default function MovieDetail({ params }: InferGetServerSidePropsType<GetServerSideProps>) {
    const router = useRouter()
    const [title, id]: any = params || []
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    )
}

// export async function
export function getServerSideProps({ params: { params }}: InferGetServerSidePropsType<GetServerSideProps>) {
    // console.log(context) // Terminal 내부에서 context 가 어떤 것이 들어오는지 확인할 수 있음
    // SSR 설정을 통해 => SEO 에 좀더 최적화된 환경을 구축해 줄 수 있다!
    return {
        props: {
            params
        },
    } // pre-render <- 로딩 표시보다는 먼저 데이터를 띄워서 보여주기
}