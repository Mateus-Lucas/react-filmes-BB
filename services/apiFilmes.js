import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDQ2NTMyOGMxNTk5MjhiZTM3NzVkMjAzOTMxMDFjYiIsInN1YiI6IjY0Mzg5OGFhODFhN2ZjMDBlMWZkZWJlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iO0kyvTaM8W2xYtCcZz154mrIcydf8-jINw4uzxF2lM'
    }
})

export default apiFilmes