import { Fragment } from 'react'
import Link from '../UI/Link'
import { useQuery } from 'react-query'
import axios from 'axios'
import Paragraph from '../typography/Paragraph'

const HomeWorldLink = ({ person, link }: { person: string; link: string }) => {
  const {
    data: homeworld,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`${person} homeworld`],
    queryFn: async () => {
      const { data } = await axios.get(link)
      return data
    },
  })

  const { name } = homeworld || {}

  return (
    <Fragment>
      {isLoading && <p>loading...</p>}
      {!isLoading && !error && (
        <Paragraph>
          Home world: <Link
            to={`/planets?planet=${link.charAt(link.length - 2)}`}
            text={name}
          />
        </Paragraph>
      )}
    </Fragment>
  )
}

export default HomeWorldLink
