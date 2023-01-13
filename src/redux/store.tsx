import { User } from '@/moodels'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice'

export interface AppStore {
    user: User
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice
    }
})
