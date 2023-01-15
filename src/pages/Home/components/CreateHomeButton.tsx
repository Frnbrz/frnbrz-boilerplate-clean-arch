import { createUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'

function CreateHomeButton() {
  const dispatch = useDispatch()

  const dispatchAction = () => {
    dispatch(createUser({ id: 25, name: 'John' }))
  }

  return <button onClick={dispatchAction}>Dispatch Action</button>
}
export default CreateHomeButton
