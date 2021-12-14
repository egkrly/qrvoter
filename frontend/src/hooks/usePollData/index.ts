import { useState } from "react"
import { IPollDataResponse } from "./types";
import axios from "axios";

const usePollData = (pollId: string) => {
    const [pollData, setPollData] = useState<IPollDataResponse | null>(null)

    const onPollDataFetchSuccess = (response) => {
        console.log('axios response', response)
        const data = response?.data[0]
        if (!data || data.length) return
        setPollData(data)
    }

    const onPollDataFetchError = (error) => {
        console.log('get poll data error', error)
        setPollData(error)
    }

    if (!pollData) {
        axios.get(`http://localhost:3000/poll/${pollId}`)
            .then(onPollDataFetchSuccess)
            .catch(onPollDataFetchError)
    }

    return pollData;
}

export default usePollData;
