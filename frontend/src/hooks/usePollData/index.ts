import { useEffect, useState } from "react"
import { IPollData } from "~/types/PollData";
import axios from "axios";

const usePollData = (pollId: string) => {
    const [pollData, setPollData] = useState<null | IPollData>(null);

    useEffect(() => {
        if (!pollData) {
            axios.get(`http://localhost:3000/poll/${pollId}`)
            .then(response => {
                console.log('axios response', response);
                const data = response?.data[0];
                if (!data || data.length) return;
                setPollData(data);
            })
            .catch(error => {
                console.log('get poll data error', error);
                setPollData(error);
            })
        }
    });

    return pollData;
}

export default usePollData;
