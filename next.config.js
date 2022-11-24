/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() { // 서버 관련 설정 추가 (redirect!)
        return [
            {
                source: '/contact',
                destination: '/form',
                permanent: false, // 기억하도록 할지에 대한 여부
            }
        ]
    },
    async rewrites() { // 리다이렉트와 같지만, 유저들에게 URL 변경이 보이지 않음
        // => /api/movies 만 보이고, API 에서의 파라미터(API_KEY) 가 보이지 않음!!!
        return [
            {
                source: '/api/movies',
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            },
            {
                source: '/api/movies/:id',
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
            }
        ]
    }
}

module.exports = nextConfig

