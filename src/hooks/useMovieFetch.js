import { useState, useEffect } from 'react'
import API from '../API'
import { isPersistedState } from '../helpers'

export const useMovieFetch = (Id, type) => {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(false)

        switch (type) {
          case 'tv':
            const show = await API.fetch(Id, type)
            const TVcredits = await API.fetchCredits(Id, type)
            const TVsimilar = await API.fetchSimilar(Id, type)
            const TVtitles = await API.fetchTitles(Id, type)
            const TVreviews = await API.fetchReviews(Id, type)
            const TVdirectors = TVcredits.crew.filter(
              (member) => member.job === 'Director'
            )
            const TVseasons = []

            for (let i = 0; i < show.seasons.length; i++)
              await TVseasons.push(
                await API.fetchSeason(Id, type, show.seasons[i].season_number)
              )

            //await show.seasons.map(async(s)=> TVseasons.push(await API.fetchSeason(Id, type, s.season_number)))
            TVtitles.titles = TVtitles.results
            setState({
              ...show,
              similar: TVsimilar,
              titles: TVtitles,
              reviews: TVreviews,
              actors: TVcredits.cast,
              crew: TVcredits.crew,
              TVseasons,
              directors: TVdirectors,
            })
            break
          case 'person':
            const actor = await API.fetchActor(Id)
            let images = await API.fetchImages(Id)
            actor.backdrop_path = await images.profiles.filter(
              (image) => image.width === 1280
            )
            if (actor.backdrop_path.length === 0) actor.backdrop_path = false
            else actor.backdrop_path = actor.backdrop_path[0]
            actor.accounts = await API.fetchAccounts(Id)
            setState(actor)
            break
          default:
            const movie = await API.fetch(Id, type)
            const credits = await API.fetchCredits(Id, type)
            const similar = await API.fetchSimilar(Id, type)
            const titles = await API.fetchTitles(Id, type)
            const reviews = await API.fetchReviews(Id, type)
            const directors = credits.crew.filter(
              (member) => member.job === 'Director'
            )

            setState({
              ...movie,
              similar,
              titles,
              reviews,
              actors: credits.cast,
              crew: credits.crew,
              directors,
            })
            break
        }

        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }

    const sessionState = isPersistedState(Id)

    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [Id, type])
  useEffect(() => {
    sessionStorage.setItem(Id, JSON.stringify(state))
  }, [Id, state])

  return { state, loading, error }
}
