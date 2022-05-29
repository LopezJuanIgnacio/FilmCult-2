import {
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
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from './config'

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

const apiSettings = {
  fetchMovies: async (searchTerm, page, Filter) => {
    let endpoint
    if (searchTerm) endpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
    else {
      switch (Filter) {
        case 'Top':
          endpoint = `${TOP_BASE_URL}&page=${page}`
          break
        case 'Upcoming':
          endpoint = `${UPCOMING_BASE_URL}&page=${page}`
          break
        case 'Now Playing':
          endpoint = `${NOW_BASE_URL}&page=${page}`
          break
        default:
          endpoint = `${POPULAR_BASE_URL}&page=${page}`
          break
      }
    }
    return await (await fetch(endpoint)).json()
  },
  fetchTV: async (page, Filter) => {
    let endpoint
    switch (Filter) {
      case 'Top':
        endpoint = `${TOP_BASE_TV_URL}&page=${page}`
        break
      case 'Today':
        endpoint = `${TODAY_BASE_TV_URL}&page=${page}`
        break
      case 'On Air':
        endpoint = `${ON_AIR_BASE_URL}&page=${page}`
        break
      default:
        endpoint = `${POPULAR_BASE_TV_URL}&page=${page}`
        break
    }
    return await (await fetch(endpoint)).json()
  },
  fetch: async (Id, type) => {
    const endpoint = `${API_URL + type}/${Id}?api_key=${API_KEY}`
    return await (await fetch(endpoint)).json()
  },
  fetchCredits: async (Id, type) => {
    const creditsEndpoint = `${API_URL + type}/${Id}/credits?api_key=${API_KEY}`
    return await (await fetch(creditsEndpoint)).json()
  },
  fetchSimilar: async (Id, type) => {
    const Endpoint = `${API_URL + type}/${Id}/similar?api_key=${API_KEY}`
    return await (await fetch(Endpoint)).json()
  },
  fetchTitles: async (Id, type) => {
    const Endpoint = `${
      API_URL + type
    }/${Id}/alternative_titles?api_key=${API_KEY}`
    return await (await fetch(Endpoint)).json()
  },
  fetchReviews: async (Id, type) => {
    const Endpoint = `${API_URL + type}/${Id}/reviews?api_key=${API_KEY}`
    return await (await fetch(Endpoint)).json()
  },
  fetchDate: async (Id, type) => {
    const Endpoint = `${API_URL + type}/${Id}/release_dates?api_key=${API_KEY}`
    return await (await fetch(Endpoint)).json()
  },
  fetchSeason: async (Id, type, number) => {
    const Endpoint = `${
      API_URL + type
    }/${Id}/season/${number}?api_key=${API_KEY}`
    return await (await fetch(Endpoint)).json()
  },
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json()
    return reqToken.request_token
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    }
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json()
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json()
      return sessionId
    }
  },
  rateMovie: async (sessionId, Id, value, type) => {
    const endpoint = `${
      API_URL + type
    }/${Id}/rating?api_key=${API_KEY}&session_id=${sessionId}`

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json()

    return rating
  },
  fetchActor: async (actorId) => {
    const endpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}`
    return await (await fetch(endpoint)).json()
  },
  fetchImages: async (actorId) => {
    const endpoint = `${API_URL}person/${actorId}/images?api_key=${API_KEY}`
    return await (await fetch(endpoint)).json()
  },
  fetchAccounts: async (actorId) => {
    const endpoint = `${API_URL}person/${actorId}/external_ids?api_key=${API_KEY}`
    return await (await fetch(endpoint)).json()
  },
}

export default apiSettings
