import React, { Component }  from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import Logo from './assets/icons/logo.png'
const Box = styled.div`
displayL 'flex'
position: fix;
width: 100%;
height: 127px;
background: linear-gradient(105.47deg, #055691 22.74%, #00839F 60.84%);
`
const Circle = styled.div`
    margin-top:${props => props.small ? '0' : '35px;'};
    background:${props => props.small ? 'white' : '#055690'};
    border-radius: 50%;
    height: ${props => props.small ? '160px' : '188px'};
    width:${props => props.small ? '160px' : '188px'};
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`
const Main = styled.div`
filter: drop-shadow(0px 0px 21px #999999);
`
const FlexRow = styled.div`
display: flex;
width:100%;
flex-direction: row;
align-items: center;
justify-content: flex-end;
visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`

const Header = styled.div`
    height: 71px;
    background:white;
    z-index:99;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Detail = styled.div`
    box-sizing: border-box;
    width:${props => props.one ? '20%' : props.two ? '65%' : '15%'}; 
    min-width:${props => props.one ? '200px' : props.tree ? '200px' : '0'}; 
    display: flex;
    flex-direction:${props => props.two ? 'column' : 'row'};
    justify-content: ${props => props.one ? 'center' : 'none'};
`
const StyledLink = styled(NavLink)`
    width: auto;
    padding: 0 0.3rem;
    font-size: 1.25em;
    height: 32px;
    font-style: normal;
    font-weight: normal;
    line-height: 138.7%;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #333333;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.3s;
    &.active,
    &:hover {
        background: #2d95a8;
        color: white;
        /* border: 0.5px solid #bababa; */
        box-sizing: border-box;
        border-radius: 5px;
        }
`
const LittleSpace = styled.div`
    width: 4rem;
`

export default class Bar extends Component {
    render() {
        return (
            <Main>
                <Header>
                <FlexRow>
                <StyledLink to='/RanifallWeb/overview'>Overview</StyledLink>
                <LittleSpace />
                <StyledLink to='/RanifallWeb/vizualize'>
                Vizualize
                </StyledLink>
                <LittleSpace />
                <StyledLink to='/RanifallWeb/model'>
                Model
                </StyledLink>
                <LittleSpace />
                </FlexRow>
                </Header>
                <Box>
                    <Detail one>
                        <Circle>
                            <Circle small>
                                <img src={Logo} style={{width:'80%'}}></img>
                            </Circle>
                        </Circle>
                    </Detail>
                </Box>
            </Main>
        )
    }
}
