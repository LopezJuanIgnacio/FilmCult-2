import { useState, useEffect } from 'react'
import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [Filter, setFilter] = useState('Popular')

  const [stateTV, setStateTV] = useState(initialState)
  const [isLoadingMoreTV, setIsLoadingMoreTV] = useState(false)
  const [FilterTV, setFilterTV] = useState('Popular')

  //Movies
  const fetchMovies = async (page, searchTerm = '', Filter = 'Popular') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page, Filter)

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  useEffect(() => {
    setState(initialState)
    fetchMovies(1, searchTerm, Filter)
  }, [searchTerm, Filter])

  // Load More
  useEffect(() => {
    if (!isLoadingMore) return

    fetchMovies(state.page + 1, searchTerm, Filter)
    setIsLoadingMore(false)
  }, [isLoadingMore, searchTerm, state.page, Filter])

  //TV
  const fetchTV = async (page, Filter = 'Popular') => {
    try {
      setError(false)
      setLoading(true)

      const shows = await API.fetchTV(page, Filter)

      setStateTV((prev) => ({
        ...shows,
        results:
          page > 1 ? [...prev.results, ...shows.results] : [...shows.results],
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  useEffect(() => {
    setStateTV(initialState)
    fetchTV(1, FilterTV)
  }, [FilterTV])

  // Load More
  useEffect(() => {
    if (!isLoadingMoreTV) return

    fetchTV(stateTV.page + 1, FilterTV)
    setIsLoadingMoreTV(false)
  }, [isLoadingMoreTV, stateTV.page, FilterTV])

  return {
    state,
    loading,
    error,
    searchTerm,
    Filter,
    setFilter,
    setSearchTerm,
    setIsLoadingMore,
    stateTV,
    FilterTV,
    setFilterTV,
    setIsLoadingMoreTV,
  }
}
