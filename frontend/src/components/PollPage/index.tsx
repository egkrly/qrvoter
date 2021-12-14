import { useParams } from 'react-router'

import { usePollData } from '~/hooks'
import { PublicPoll } from '~/components'

interface IPollPageParams {
    id: string
}

const Loading = () => {
    return (
        <h1>Loading poll...</h1>
    )
}

const FetchError = ({ error }) => {
    return (
        <>
            <h1>Error</h1>
            {error.message && <p>{error.message}</p>}
        </>
    )
}

const ArchivedPoll = ({ name }) => {
    return (
        <>
            <h1>We are sorry</h1>
            <p>The poll <b>"{name}"</b> has been archived.</p>
        </>
    )
}

const PollPage = () => {
    const { id } = useParams<IPollPageParams>()
    const { name, questions, isLoading, isError, error, archived } = usePollData(id)

    return archived ? <ArchivedPoll name={name} />
        : isLoading ? <Loading />
        : isError ? <FetchError error={error} />
        : <PublicPoll name={name} questions={questions} />
}

export default PollPage
