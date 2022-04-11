import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function section({title,description,backgroundImage,leftBtnText,rightBtnText}) {
  
  return (
    <Wrap bgImage = {backgroundImage}>
      <Fade bottom>
      <ItemText>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom>
      <ButtonGroup>
      
        <LeftButton>
        {leftBtnText}
        </LeftButton>

        {rightBtnText && 
        <RightButton>
        {rightBtnText}
        </RightButton> 
        }
        
      </ButtonGroup>
      </Fade>
      <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>
      </Wrap>
  )
}

export default section
const Wrap = styled.div`
width:100%;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repaet ;
display: flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props => `url("/images/${props.bgImage}")`};


`
const ItemText = styled.div`
padding-top:10vh;
text-align:center;
`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 2px;
@media (max-width:768px) {
  flex-direction: column;

}

`


const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2%;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor:pointer;
margin:4%;
`

const RightButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 2%;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor:pointer;
margin:4%;
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
`

const Buttons = styled.div`

`


