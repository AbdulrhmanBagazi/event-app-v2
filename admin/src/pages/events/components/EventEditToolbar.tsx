import { Toolbar, SaveButton } from 'react-admin'

const EventEditToolbar = (props: object) => (
  <Toolbar {...props}>
    <SaveButton mutationOptions={{
      onError: () => {
        return
      }
    }
    } type="button" />
  </Toolbar>
)

export default EventEditToolbar
