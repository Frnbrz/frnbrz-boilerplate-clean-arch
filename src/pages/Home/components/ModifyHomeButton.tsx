import { modifyUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'

function ModifyHomeButton() {
    const dispatch = useDispatch()

    const dispatchAction = () => {
        dispatch(modifyUser({ id: 0, name: 'John' }))
    }

    return <button onClick={dispatchAction}>Dispatch Modify Action</button>
}
export default ModifyHomeButton
