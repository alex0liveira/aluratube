import styled from "styled-components";

export const StyledFavorite = styled.div`
    padding: 32px;
    
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
    div{
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(100px,1fr);
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        width: calc(100vw - 16px * 4);
        a {
            overflow: hidden;
            scroll-snap-align: start;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            span {
                padding-top: 8px;
                font-size: 14px;
                text-align: center;
                padding-bottom: 24px;
                display: block;
                overflow-wrap: break-word;
                color: ${({ theme }) => theme.textColorBase || "#222222"};
            }
        }
        }
`;