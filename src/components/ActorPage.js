import React from 'react'
import { useParams } from 'react-router-dom'
// Components
import BreadCrumb from './BreadCrumb'
import Spinner from './Spinner'
import ActorInfo from './ActorInfo'
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch'

const ActorPage = () => {
  const { actorId } = useParams()

  const { state: actor, loading, error } = useMovieFetch(actorId, 'person')

  if (loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>

  return (
    <>
      <BreadCrumb Title={actor.name} />
      <ActorInfo actor={actor} />
    </>
  )
}

export default ActorPage
