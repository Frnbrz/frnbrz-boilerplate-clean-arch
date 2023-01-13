import { createUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'

function CreateHomeButton() {
    const dispatch = useDispatch()

    const dispatchAction = () => {
        dispatch(createUser({ name: 'John', id: 25 }))
    }

    return <button onClick={dispatchAction}>Dispatch Action</button>
}
export default CreateHomeButton
