import Heading from '@Components/typography/Heading'
import { TFilm } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Stats from '@Components/Info/Stats'
import { useSearchParams } from 'react-router-dom'

const Film = ({ filmData }: { filmData: TFilm }) => {
  const { title, episode_id, director, producer, release_date } = filmData

  const [, setSearchParams] = useSearchParams()

  const showFullFilmData = () => {
    setSearchParams(`film=${episode_id}`)
  }

  return (
    <ListItem onClick={showFullFilmData}>
      <Heading semantic='h2' text={`${episode_id}. ${title}`} />
      <Stats
        type='film'
        film={{ director, producer, release_date, episode_id }}
      />
    </ListItem>
  )
}

export default Film
