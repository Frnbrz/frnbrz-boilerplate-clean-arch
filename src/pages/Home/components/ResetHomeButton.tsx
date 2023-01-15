import { resetUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'

function ResetHomeButton() {
  const dispatch = useDispatch()

  const dispatchAction = () => {
    dispatch(resetUser())
  }

  return <button onClick={dispatchAction}>Reset Action</button>
}
export default ResetHomeButton
