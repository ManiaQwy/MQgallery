import { styled } from 'styled-components'

const BlockQuote = styled.blockquote`
    font-size: 3rem;
    margin: 0 0 3rem 0;
    padding:0 2rem;
`
export default function Quote({children}){
    return(
            <BlockQuote>
                {children}
            </BlockQuote>
    )
}