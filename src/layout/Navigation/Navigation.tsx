import { useClientWidth } from '@Hooks/useClientWidth'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const navMode = {
  desktop: DesktopNavigation,
  mobile: MobileNavigation,
}

const Navigation = () => {
  const { width } = useClientWidth()

  const Navigation = width > 700 ? navMode.desktop : navMode.mobile

  return <Navigation />
}

export default Navigation
