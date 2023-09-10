const useUnitId = () => {
  const pattern = /\/(\d+)\//

  const separateId = (links: string | string[]) => {
    if (Array.isArray(links))
      return links.map(link => link.match(pattern)![1]) as string[]
    return links.match(pattern)![1] as string
  }

  return { separateId }
}

export default useUnitId
