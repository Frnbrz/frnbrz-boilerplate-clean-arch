import { CreateHomeButton, ModifyHomeButton, ResetHomeButton } from './components'
import { HomeTitle, Layout } from './styled-components'

function Home() {
    return (
        <Layout>
            <HomeTitle>Home</HomeTitle>
            <CreateHomeButton />
            <ModifyHomeButton />
            <ResetHomeButton />
        </Layout>
    )
}
export default Home
