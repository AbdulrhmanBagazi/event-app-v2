import {
  DashboardMenuItem,
  Menu,
  MenuItemLink,
  useResourceDefinitions,
  useSidebarState,
  MenuProps,
} from 'react-admin'
import DefaultIcon from '@mui/icons-material/ViewList'

const MyMenu = (props: MenuProps | any) => {
  const resources = useResourceDefinitions()
  const [open] = useSidebarState()

  return (
    <Menu {...props}>
      <DashboardMenuItem />
      {Object.keys(resources).map((name) => (
        <MenuItemLink
          key={name}
          to={`/${name}`}
          primaryText={(resources[name].options && resources[name].options.label) || name}
          leftIcon={<DefaultIcon />}
          onClick={props.onMenuClick}
          sidebarIsOpen={open}
        />
      ))}
      {/* add your custom menus here */}
    </Menu>
  )
}

export default MyMenu
