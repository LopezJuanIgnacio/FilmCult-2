import React from 'react'
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'
// Components
import HeroImage from './HeroImage'
import HomeGrid from './HomeGrid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'
import Selector from './Selector'
import { Wrapper } from './Home.styles'
// Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
// Image
import NoImage from '../images/no_image.jpg'

const Home = () => {
  const {
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
  } = useHomeFetch()
  const filters = ['Top', 'Upcoming', 'Popular', 'Now Playing']
  const filtersTV = ['Top', 'On Air', 'Popular', 'Today']

  if (error) return <div>Something went wrong ...</div>

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Wrapper>
        {searchTerm === '' && (
          <Selector
            otherfilters={filters}
            Filter={Filter}
            setFilter={setFilter}
          />
        )}
        <HomeGrid header={searchTerm ? 'Search Result' : `${Filter} Movies`}>
          {state.results.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              Name={movie.title}
              Rating={movie.vote_average}
              Id={movie.id}
            />
          ))}
        </HomeGrid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && searchTerm === '' && (
          <Button
            text="Load More"
            callback={() => setIsLoadingMore(true)}
            color="--principal"
          />
        )}
        {searchTerm === '' && (
          <>
            <Selector
              otherfilters={filtersTV}
              Filter={FilterTV}
              setFilter={setFilterTV}
            />
            <HomeGrid header={`${FilterTV} Shows`}>
              {stateTV.results.map((show) => (
                <Thumb
                  key={show.id}
                  clickable
                  image={
                    show.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + show.poster_path
                      : NoImage
                  }
                  Name={show.name}
                  Rating={show.vote_average}
                  Id={show.id}
                  isShow
                />
              ))}
            </HomeGrid>
            {stateTV.page < stateTV.total_pages && !loading && (
              <Button
                text="Load More"
                callback={() => setIsLoadingMoreTV(true)}
                color="--principal"
              />
            )}
          </>
        )}
      </Wrapper>
    </>
  )
}

export default Home
