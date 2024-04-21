import { defineStore } from "pinia"
import { ref } from "vue"
import { Genres, Movies } from '../../types'

export const useMoviesStore = defineStore('movies', () => {
    const urlGenres = `${import.meta.env.VITE_MOVIE_API_URL}genre/movie/list?`
    const urlList = (id: number) => `${import.meta.env.VITE_MOVIE_API_URL}discover/movie?language=uk-UA&page=1&sort_by=popularity.desc&with_genres=M${id}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`
        }
    }

    let genres = ref<Genres>()
    let moviesData = ref<Movies>()

    const setGenres = (data: Genres) => genres.value = data
    const setMoviesData = (data: Movies) => moviesData.value = data
    
    const getGenres = async () => {
        fetch(urlGenres, options)
        .then(res => res.json())
        .then(json => setGenres(json))
        .catch(err => console.error('error:' + err));
    }

    const getMoviesData = async () => {
        if(genres.value !== undefined){
            genres.value.genres.forEach(element => {
                fetch(urlList(element.id), options)
                .then(res => res.json())
                .then(json => setMoviesData(json))
                .catch(err => console.error('error:' + err));
            })
        }
    }

    return { getGenres, getMoviesData, genres, moviesData }
})