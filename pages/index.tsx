import Title from "../components/Title";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

interface IMovieProps {
    id: number;
    poster_path: string;
    original_title: string;
}

export default function Index({ results }: InferGetServerSidePropsType<GetServerSideProps>) {
    return (
        <div className="container">
            <Title title="Home"/>
            {results?.map((movie: IMovieProps) => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <style jsx>{`
              .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
              }

              .movie {
                cursor: pointer;
              }

              .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .movie:hover img {
                transform: scale(1.05) translateY(-10px);
              }

              .movie h4 {
                font-size: 18px;
                text-align: center;
              }
            `}
            </style>
        </div>
    )
}

// get Server Site Props
export async function getServerSideProps() {
    // 이름 변경 불가! 서버에서 돌아가게 하는 코드
    // SSR 을 요청하기 때문에, 백엔드에서 실행되므로 이쪽에서 API_KEY 를 숨기는 방법도 있음
    const { results } = await (
        await fetch(`http://localhost:3000/api/movies`)).json()
    return {
        props: {
            results, // 서버에서 받아들인 결과물을 그대로 통째로 출력해줌
            // 데이터가 유효해야 화면이 출력 (Loading 이 있을 필요는 없지만, 로딩이 길 경우 문제)
        }
    }
}