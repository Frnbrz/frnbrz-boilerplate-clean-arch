import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserEmptyState } from './moodels'
import { Home } from './pages'
import store, { AppStore } from './redux/store'

function App() {
    const user = useSelector((state: AppStore) => state.user)

    return (
        <>
            <span>{JSON.stringify(user)}</span>
            <Home />
        </>
    )
}

export default App
