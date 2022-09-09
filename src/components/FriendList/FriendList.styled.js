import styled from 'styled-components';

export const FriendsList = styled.ul`
padding: 30px;
` 
export const FriendItem = styled.li`
list-style: none;

display: flex;
align-items: center;

padding-left: 10px;
padding-right: 70px;
padding-bottom: 10px;
padding-top: 10px;
border: 1px solid #d5d4d4;
border-radius: 5px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
0px 1px 1px rgba(0, 0, 0, 0.14),
0px 2px 1px rgba(0, 0, 0, 0.2);


:not(:last-child) {
    margin-bottom: 15px;
}

img {
    margin-right: 10px;
}
`
export const OnlineFriend = styled.span`
margin-right: 10px;
width: 15px;
height: 15px;
border-radius: 50px;
background-color: ${p => (p.isOnline ? 'green' : 'red')};
`