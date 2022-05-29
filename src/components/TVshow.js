import React from 'react'
import { useParams } from 'react-router-dom'
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// Components
import BreadCrumb from './BreadCrumb'
import Grid from './Grid'
import Spinner from './Spinner'
import Comment from './Comment'
import MovieInfo from './MovieInfo'
import Thumb from './Thumb'
import CommentSection from './CommentSection'
import Actor from './Actor'
import Season from './Season'
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// Image
import NoImage from '../images/no_image.jpg'

const TVShow = () => {
  const { showId } = useParams()

  const { state: show, loading, error } = useMovieFetch(showId, 'tv')
  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
      <BreadCrumb Title={show.original_name} />
      <MovieInfo movie={show} />
      <CommentSection>
        <h1>Seasons</h1>
        {show.TVseasons.map((s) => (
          <Season key={s.id} s={s} />
        ))}
      </CommentSection>
      <Grid header="Actors">
        {show.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            actorId={actor.id}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
      <Grid header="Crew">
        {show.crew.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            actorId={actor.id}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
      <Grid header="Similar shows">
        {show.similar.results.map((movie) => (
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
      </Grid>
      <CommentSection>
        <h1>Discussion</h1>
        {show.reviews.results.map((review) => (
          <Comment key={review.id} obj={review} />
        ))}
      </CommentSection>
    </>
  )
}

export default TVShow
