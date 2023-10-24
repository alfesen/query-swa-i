import { Helmet } from 'react-helmet'

const Head = ({ title }: { title: string }) => {
  return (
    <Helmet>
      <title>{title} - QuerySWAPI</title>
      <link
        rel='canonical'
        href={`${window.location.hostname}/${title.toLowerCase()}`}
      />
    </Helmet>
  )
}

export default Head
