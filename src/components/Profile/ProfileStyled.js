import styled from 'styled-components';

export const ContainerProfile = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
text-align: center;
margin-right: auto;
margin-left: auto;
flex-direction: column;
padding-top: 30px;
font-size: 16px;
color: #5a5555;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
0px 1px 1px rgba(0, 0, 0, 0.14),
0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 5px;
margin-bottom: 50px;


.avatar {
display: block;
height: auto; 
}
`

export const UserName = styled.p`
font-size: 24px;
font-weight: 500;
color: #000;
margin-bottom: 10px;
`

export const Description = styled.p`
    margin-bottom: 10px;
`

export const Stats = styled.ul`
    display: flex;
    background-color: #efefef;
   padding: 0;
`

export const StatsItem = styled.li`

list-style: none;
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid #d5d4d4;
text-align: center;
padding: 20px;

.quantity {
    color: black;
    font-weight: 700;
}
`