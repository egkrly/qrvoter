import styled from 'styled-components'

import AnswerBox from './AnswerBox'

const PollHeader = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    background-color: #eee;
    align-items: center;
    justify-content: center;
    font-size: 32px;
`

const QuestionBox = styled.div`
    margin-top: 22px;
`

const PublicPoll = ({ name, questions }) => {
    return (
        <>
            <PollHeader>{name}</PollHeader>
            {questions.map(({ name: questionName, answers }) => (
                <QuestionBox>
                    <h2>{questionName}</h2>
                    {answers.map(({ answer }) => (
                        <AnswerBox answer={answer} />
                    ))}
                </QuestionBox>
            ))}
        </>
    )
}

export default PublicPoll
