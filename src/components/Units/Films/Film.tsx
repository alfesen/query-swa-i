import Heading from '@Components/typography/Heading'
import { TFilm } from '@Types/units'
import ListItem from '@Components/List/ListItem'
import Stats from '@Components/Info/Stats'
import { useModal } from '@/hooks/useModal'

const Film = ({ data }: { data: TFilm }) => {
  const { title, episode_id, director, producer, release_date } = data
  const { showFullData } = useModal()

  return (
    <ListItem onClick={() => showFullData('film', episode_id)}>
      <Heading semantic='h2' text={`${episode_id}. ${title}`} />
      <Stats
        type='film'
        film={{ director, producer, release_date, episode_id }}
      />
    </ListItem>
  )
}

export default Film
