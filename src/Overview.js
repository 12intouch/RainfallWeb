import React, { Component } from 'react';
import styled from 'styled-components'
import { Row, Col, Space, Timeline} from 'antd';
import 'antd/dist/antd.css';
import Errorlogo from './assets/icons/error.svg';
import Wirelogo from './assets/icons/broken-wire.svg';
import Problem from './assets/icons/problem.svg';
import Clean from './assets/icons/clean-code.svg';
import Vis from './assets/icons/visualization.svg';
import { ClockCircleOutlined } from '@ant-design/icons';
const Divbox = styled.div`
margin-top:120px;
margin-left:22%;
margin-right:22%;
@media (max-width: 2000px) {
  margin-left:15%;
  margin-right:15%;
}
@media (max-width: 1315px) {
  margin-left:10%;
  margin-right:10%;
}
@media (max-width: 411px) {
  margin-left:5%;
  margin-right:5%;
}

`
const FlexRow = styled.div`
padding-top:2.5rem;
padding-bottom:2.5rem;
display: flex;

flex-direction: row;
text-decoration: underline ;
font-family: 'Mitr', sans-serif;
font-size:1.7rem;
// background-color:black;
@media (max-width: 411px) {
    font-size:1.3rem;
  }
`
const Splitbox = styled.div`
display:flex;
padding-top:1rem;
padding-left:1rem;
padding-right:1rem;
padding-bottom:1rem;
color:black;
font-family: 'Mitr', sans-serif;
font-size:1.2rem;
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
@media (max-width: 1100px) {
    font-size:1rem;
}
`
const Circle = styled.div`
    background:${props => props.small ? 'linear-gradient(90deg, #B70444 15%, #D44747 67.43%, #EAA742 132.32%);' : 'white'};
    box-shadow:${props => props.small ? 'none' : '0px 0px 12px rgba(0, 0, 0, 0.25)'};
    border-radius: 50%;
    height: ${props => props.small ? '6rem' : '7rem'};
    width:${props => props.small ? '6rem' : '7rem'};
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`
const Rowcss = styled.div`
// padding-left: 10%;
// padding-right: 10%;
display:flex;
flex-direction: row;
// align-items: center;
// justify-content:center;
@media (max-width: 1100px) {
    flex-direction: column;
}
`
const Colcss = styled.div`
// padding-left:1rem;
// display:flex;
padding-left: ${props => props.one ? '0' : '1rem'}; 
width:50%;
// align-items: center;
// justify-content:center;
color:white;
@media (max-width: 1100px) {
    width:100%;
    padding-left:0;
    margin-top: ${props => props.one ? '0' : '1rem'}; 
}

`
const Box = styled.div`
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
display:flex;
flex-direction:row;
background-color:${props => props.one ? 'white' : props.two ? 'white' : 'white'}; 
border-radius: 10px;
@media (max-width: 530px) {
    flex-direction:column;
}
`
const Pic = styled.img`
width:10rem;
height:10rem;

`
const FlexrowBox = styled.div`
display:flex;
flex-direction:row;
@media (max-width: 530px) {
    flex-direction:column;
}

`
const FlexrowBox2 = styled.div`
display:flex;
flex-direction:row;
@media (max-width: 888px) {
    flex-direction:column;
}

`
const Headfont = styled.div`
font-size:2.3rem;
// background-color: #00DBDE;
// background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
background: rgb(120,88,184);
background: linear-gradient(90deg, rgba(120,88,184,1) 0%, rgba(25,189,215,1) 51%, rgba(92,219,218,1) 100%);

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@media (max-width: 1570px) {
    font-size:2rem;  
}
@media (max-width: 411px) {
    font-size:1.6rem;
}

`
const Desfont = styled.div`
font-size:1.6rem;
font-family: 'Mitr', sans-serif;
@media (max-width: 1570px) {
    font-size:1.3rem;  
}
@media (max-width: 411px) {
    font-size:0.9rem;
}
`
const Desfont2 = styled.div`
font-size:1.2rem;
font-family: 'Mitr', sans-serif;
@media (max-width: 530px) {
    
}
@media (max-width: 411px) {
    font-size:0.9rem;
}
`
const Line = styled.div`
height:2.8px;
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(62,60,173,1) 68%, rgba(13,108,247,1) 100%);


width:2rem


`
const Iconpic = styled.img`
height:auto;
width:12rem;
filter:drop-shadow(0px 0px 5px #999999);

`

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
class Overview extends Component {
    state = {  }
    
    render() { 
        return (  
            <Divbox>
            <div>
                <FlexRow style={{marginTop:'1rem'}}>
                
                <Space>สถาบันสารสนเทศทรัพยากรน้ำและระบบคลังข้อมูลน้ำแห่งชาติ</Space>
                </FlexRow>
                <Desfont2>
                สถาบันสารสนเทศทรัพยากรน้ำ (องค์การมหาชน) หรือ สสน. พัฒนา “ระบบคลังข้อมูลน้ำแห่งชาติ” (National Hydroinformatics Data Center : NHC) 
                เพื่อเป็นศูนย์กลางในการรวบรวมข้อมูลด้านทรัพยากรน้ำของประเทศ ทั้งข้อมูลพื้นที่ ข้อมูลสถิติ ข้อมูลสถานการณ์น้ำปัจจุบัน ข้อมูลคาดการณ์และงานวิจัยที่เกี่ยวข้องกับการบริหารจัดการทรัพยากรน้ำของประเทศ 
                เพื่อนำมาใช้ให้เกิดประโยชน์สูงสุด ทั้งในด้านการบริหารจัดการน้ำ ควบคุมสถานการณ์ การแจ้งเตือนภัย 
                และลดความสูญเสียทั้งชีวิตและทรัพย์สินของประชาชนได้อย่างทันท่วงที
                </Desfont2>

                <FlexRow style={{marginTop:'2rem'}}>
                <Space>
                    ปัญหา

                </Space>
                </FlexRow>
                <Rowcss>
                <Colcss span={12} one>
                    <Box one>
                        <Splitbox>
                        <Circle>
                            <Circle small><img src={Errorlogo} style={{width:'70%'}} /></Circle>
                        </Circle>
                        </Splitbox>
                        <Splitbox>
                        ข้อมูลปริมาณน้ำฝนจากคลังข้อมูลน้ำแห่งชาติตั้งแต่ปี 2007 – 2020 มีข้อมูลที่ผิดพลาดและตกหล่น
                        </Splitbox>
                    </Box>
                </Colcss>
                <Colcss span={12} >
                    <Box two>
                        <Splitbox>
                        <Circle>
                            <Circle small><img src={Wirelogo} style={{width:'80%'}} /></Circle>
                        </Circle>
                        </Splitbox>
                        <Splitbox>
                        เซนเซอร์ที่ใช้อ่านข้อมูลปริมาณน้ำฝนในตำแหน่งต่างๆมีการชำรุดเสียหาย 
                        </Splitbox>
                    </Box>
                </Colcss>
                </Rowcss>
                <FlexRow style={{marginTop:'2rem'}}>
                <Space>
                    วัตถุประสงค์

                </Space>

                </FlexRow>
                

              
                    <FlexrowBox2>
                        <Splitbox>
                        <Iconpic src={Clean}></Iconpic>
                        </Splitbox>
                        <Splitbox >
                        <div >
                        <Headfont>
                        เพื่อพัฒนาโมเดลทางด้านสถิติ และ Machine learning </Headfont>
                        <Desfont>
                        มาตรวจจับข้อมูลฝนที่เป็น Outlier และ Missing Data
                        และเสนอแนะการแทนที่ข้อมูลเหล่านั้นลงไปจากค่า confidence </Desfont>
                        </div>
                        </Splitbox>
                    </FlexrowBox2>

                    <FlexrowBox2>
                        <Splitbox>
                        <Iconpic src={Vis}></Iconpic>
                        </Splitbox>
                        <Splitbox >
                        <div >
                        <Headfont>
                        เพื่อพัฒนาการแสดงผลข้อมูลปริมาณน้ำฝนในมุมมองต่างๆ</Headfont>
                        
                        </div>
                        </Splitbox>
                    </FlexrowBox2>
            
                
                
            
            </div>
            </Divbox>
        );
    }
}
 
export default Overview;