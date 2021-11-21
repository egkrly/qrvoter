import { useParams } from "react-router";
import { usePollData } from "~/hooks";

interface IPollParams {
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
    const { id } = useParams<IPollParams>();
    const pollData = usePollData(id);
    if (!pollData) return <Loading />;
    if (pollData.error) return <FetchError error={pollData.error} />;
    const { name, startDate, endDate, archived } = pollData;

    // TODO: put this logic to backend.
    // we should only receive the name of the poll from BE if it's archived.
    return !archived ? (
        <>
            <h1>{name}</h1>
            <b>Start: </b> {startDate}<br></br>
            <b>End: </b> {endDate || 'no data'}<br></br>
        </>
    ) : (
        <ArchivedPoll name={name} />
    )
}

export default PollPage;
