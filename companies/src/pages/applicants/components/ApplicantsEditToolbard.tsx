import { Toolbar, SaveButton } from 'react-admin'

const ApplicantsEditToolbard = (props: object) => (
  <Toolbar {...props}>
    <SaveButton
      mutationOptions={{
        onError: () => {
          return
        },
      }}
      type="button"
      // alwaysEnable
    />
  </Toolbar>
)

export default ApplicantsEditToolbard
