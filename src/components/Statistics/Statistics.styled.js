import styled from 'styled-components';

export const SectionStatistics = styled.section`
margin-bottom: 50px;
padding-top: 30px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2),
0px 1px 1px rgba(0, 0, 0, 0.14),
0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 5px;

.title {
    margin-bottom: 15px;
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
}
`

export const StatList = styled.ul`
display: flex;
padding: 0;
`

export const StatItem = styled.li`
list-style: none;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
color: #fff0f0;
background-color: ${p => getRandomHexColor()};

.label {
    font-size: 18px;
}
`

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }