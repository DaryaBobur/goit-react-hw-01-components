import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 25px;
font-size: 16px;
color: #5a5555;

.avatar {
display: block;
height: auto; 
}
`

export const UserName = styled.p`
font-size: 24px;
font-weight: 700;
color: #000;
margin-bottom: 10px;
`

export const Description = styled.p`
.tag {
    margin-bottom: 10px;
}

.location {
    margin-bottom: 20px;
}
`

export const Stats = styled.li`
list-style: none;
display: flex;
justify-content: center;
gap: 15px;
padding: 10px;
border: 1px solid black;
border-radius: 5px;

.quantity {
    display: block;
}
`


