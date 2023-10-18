import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchInputContainerStyles = css({
  margin: '3em auto',
  width: 'max-content',
  display: 'flex',
  gap: '1em',
})

const InputStyle = css({
  backgroundColor: '#fff',
  padding: '.5em 1em',
  border: '1px solid black',
  borderRadius: '.4rem',
  fontSize: '1.6rem',
  '&::placeholder': {
    color: '#c55894',
  },
})

const SearchInputContainer = styled.div(SearchInputContainerStyles)
const Input = styled.input(InputStyle)
const Select = styled.select(InputStyle)
const Option = styled.option()

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      searchParams.delete('s')
      setSearchParams(searchParams)
    } else {
      searchParams.set('s', event.target.value)
      setSearchParams(searchParams)
    }
  }
  const searchCategoryHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ c: event.target.value })
  }

  const inputDisabled = !searchParams.get('c')
  const options = [
    'People',
    'Planets',
    'Species',
    'Starships',
    'Vehicles',
    'Films',
  ]
  return (
    <SearchInputContainer>
      <Select
        as='select'
        name='Category'
        defaultValue='--Category--'
        value={searchParams.get('c') ?? ''}
        onChange={searchCategoryHandler}>
        <Option
          value=''
          defaultValue=''
          disabled={
            searchParams.get('c') && searchParams.get('c') != '' ? true : false
          }>
          -- category --
        </Option>
        {options.map((option, index) => (
          <Option
            key={`option ${index} - ${option}`}
            value={option.toLowerCase()}>
            {option}
          </Option>
        ))}
      </Select>
      <Input
        as='input'
        onInput={searchInputHandler}
        value={searchParams.get('s') ?? ''}
        placeholder='search term'
        disabled={inputDisabled}
      />
    </SearchInputContainer>
  )
}

export default SearchInput
