import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-directions: column;
    width: 100%;
    height: 500px;
`;

export const Head = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: brown;
    justify-content: center;

    a {
        color: ${props => `${props.cor}` };
    }
`;