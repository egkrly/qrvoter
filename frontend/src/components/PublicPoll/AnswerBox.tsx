import styled from "styled-components"

const Box = styled.div`
    padding: 12px;
    border: 1px solid #eee;
    line-height: 22px;
    color: #888;
`

const AnswerBox = ({answer}) => {
    return (
        <Box>{answer}</Box>
    )
}

export default AnswerBox
