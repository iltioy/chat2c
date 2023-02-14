import styled from "styled-components";

interface Props {
    width: any;
    height: any;
    background: any;
    hoverBackground: any;
}

export const StyledButton = styled.div<Props>`
    button {
        outline: none;
        border: none;
        width: ${({ width }) => width}px;
        height: ${({ height }) => height}px;
        font-size: 16px;
        background: #${({ background }) => background};
        color: white;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            background: #${({ hoverBackground }) => hoverBackground};
        }
    }
`;
