const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = process.env.REACT_APP_API_KEY

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`
const TOP_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`
const UPCOMING_BASE_URL = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`
const NOW_BASE_URL = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US`

const POPULAR_BASE_TV_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`
const TOP_BASE_TV_URL = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US`
const TODAY_BASE_TV_URL = `${API_URL}tv/airing_today?api_key=${API_KEY}&language=en-US`
const ON_AIR_BASE_URL = `${API_URL}tv/airing_today?api_key=${API_KEY}&language=en-US`

const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/'
const REVIEW_IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w64_and_h64_face'
const BACKDROP_SIZE = 'w1280'
const POSTER_SIZE = 'w780'

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TOP_BASE_URL,
  UPCOMING_BASE_URL,
  NOW_BASE_URL,
  POPULAR_BASE_TV_URL,
  TOP_BASE_TV_URL,
  TODAY_BASE_TV_URL,
  ON_AIR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  REVIEW_IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
}
