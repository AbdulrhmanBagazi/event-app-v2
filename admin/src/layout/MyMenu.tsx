import {
  DashboardMenuItem,
  Menu,
  MenuItemLink,
  useResourceDefinitions,
  useSidebarState,
  MenuProps,
} from 'react-admin'

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
          onClick={props.onMenuClick}
          sidebarIsOpen={open}
          leftIcon={resources[name].icon}
        />
      ))}
      {/* add your custom menus here */}
    </Menu>
  )
}

export default MyMenu
