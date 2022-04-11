import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react'
import {selectCars} from "../features/car/carSlice";
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus,setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a href='https://www.example.com'>
        <img src='/images/logo.svg' alt=''/>
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
        <a  key = {index}  href='https://www.example.com'>{car}</a>
        ))}
       
      </Menu>
      <RightMenu>
      <a href='https://www.example.com'>Shop</a>
      <a href='https://www.example.com'>Tesla Account</a>
      <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show = {burgerStatus}>
      <CloseWrapper>
        <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
        <li key = {index} ><a  href='https://www.example.com'>{car}</a></li>
        ))}
        <li><a  href='https://www.example.com'>Existing Inventory</a></li>
        <li><a  href='https://www.example.com'>Used Inventory</a></li>
        <li><a  href='https://www.example.com'>Trade In </a></li>
        <li><a  href='https://www.example.com'>Cybertruck</a></li>
        <li><a  href='https://www.example.com'>Roadaster</a></li>
       
      </BurgerNav>
      </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position: fixed;
display:flex;
align-items: center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items: center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  margin: 10px;
  flex-wrap:nowrap;
  
}
@media (max-width:768px) {
  display: none;

}
`
const RightMenu = styled.div`
display:flex;
align-items: center;
a{
  font-weight:600;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;
  
}
`
const CustomMenu = styled(MenuIcon)`
corsor:pointer;
`

const BurgerNav = styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
align-items: start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition:transform .3s ease-in;
li{
  padding:15px;
  border-bottom:1px solid rgba(0, 0, 0, 0.2)
}
a{
  font-weight:600;
}
`

const CustomClose = styled(CloseIcon)``

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
width:263px;

`