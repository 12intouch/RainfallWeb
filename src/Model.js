import React, { Component } from 'react'
import styled from 'styled-components'
import tableau from "tableau-api";
import { Form, Input, Button, Select, Table, Spin, Tabs, message } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import { CSVLink } from "react-csv";
import { Line } from '@ant-design/charts';
const backend_url = "http://localhost:5050/api"
const backend_url1 = "http://localhost:5000/api"
// const url = 'https://public.tableau.com/views/ModelVisualization/Dashboard1?:language=en&:display_count=y&publish=yes&:toolbar=n&:origin=viz_share_link'
const { TabPane } = Tabs;
const Result = [{DateTime: "1", Rain1h: 200, Rain1h_Predict: 2, Anomaly_Sig: 2},{DateTime: "2", Rain1h: 300, Rain1h_Predict: 2, Anomaly_Sig: 1},{DateTime: "3", Rain1h: 200, Rain1h_Predict: 2, Anomaly_Sig: 1}]
const Reanomaly = [{Date: "1", Actual: 0}]
const Rezero = [{Date: "1", Actual: 0}]
const Rezerotwo = [{Date: "1", Actual: 0}]
const Renan = [{Date: "1", Actual: 0}]
const columns = [
    {
      title: 'DateTime',
      dataIndex: 'DateTime',
      key: 'DateTime',
    },
    {
      title: 'Rain1h',
      dataIndex: 'Rain1h',
      key: 'Rain1h',
    },
    {
      title: 'Rain1h_Predict',
      dataIndex: 'Rain1h_Predict',
      key: 'Rain1h_Predict',
    },
    {
        title: 'Anomaly_Sig',
        dataIndex: 'Anomaly_Sig',
        key: 'Anomaly_Sig',
    },
  ];

  const columns1 = [
    {
      title: 'DateTime',
      dataIndex: 'Date',
      key: 'Date',
    },
    {
      title: 'Actual',
      dataIndex: 'Actual',
      key: 'Actual',
    }
  ];

const Main = styled.div`
    padding-left:20%;
    padding-right:20%;
    padding-bottom:30%;
    width:100%;
    display:flex;
    flex-direction:column;
    // align-items: center;
    // justify-content: center;
    @media (max-width: 2000px) {
      padding-left:15%;
      padding-right:15%;
    }
    @media (max-width: 1315px) {
      padding-left:10%;
      padding-right:10%;
    }
    @media (max-width: 411px) {
      padding-left:5%;
      padding-right:5%;
    }
   
`
const Texxt = styled.div`
  font-family: 'Mitr', sans-serif;
  font-size:1rem;

`
const Texxt2 = styled.div`
  font-family: 'Mitr', sans-serif;
  font-size:1rem;
  // margin-top:20px;

`
const Minicircle = styled.div`
  // margin-top:20px;
  height:10px;
  width:10px;
  border-radius:50%;

`




export default class Model extends Component {
    // componentDidMount(){
    //     this.initViz();
    // }
    
    // initViz = () => {
    //     const options = {
    //         device: "mobile",
    //         width : "375px",
    //         height: "1100px"
    //     }
    //     const vizContainer = this.vizContainer;
    //     this.div = new window.tableau.Viz(vizContainer, url, options)
    // }
    
    state = {
        rerol:0,
        renul:0,
        reano:0,
        dataresult: Result,
        dataanomaly: Reanomaly,
        datazero: Rezero,
        datazerotwo: Rezerotwo,
        datanan: Renan,
        loading: false,
        loading1: false,
        showResult: false,
        showResult1: false,
        station:'',
        year:'',
    }
    config =  {
        xField: 'DateTime',
        yField: 'Rain1h',
        stroke:'black',
        point: {
          size: 5,
          shape: 'circle',
        },
        label: {
          style: {
            fill: '#aaa',
          },
        },
        seriesField: 'Anomaly_Sig', // or seriesField in some cases
        color: ({Anomaly_Sig}) => {
            if(Anomaly_Sig === 1){
                return 'red';
            }
            return 'blue';
        },
        lineStyle: {
            
            lineWidth: 0,
        },
        tooltip: {
            fields: ['Rain1h'],
        }     
    };

    config2 =  {
        xField: 'DateTime',
        yField: 'Rain1h_Predict',
        point: {
          size: 5,
          shape: 'circle',
        },
        label: {
          style: {
            fill: '#aaa',
          },
        },
        seriesField: 'Anomaly_Sig', // or seriesField in some cases
        color: ({Anomaly_Sig}) => {
            if(Anomaly_Sig === 1){
                return 'green';
            }
            else if(Anomaly_Sig === 2){
                return 'orange';
            }
            return 'blue';
        },
        lineStyle: {
            
            lineWidth: 0,
        },
        tooltip: {
            fields: ['Rain1h_Predict'],
        }
    };
    onFinish = (values) => {
        this.setState({
            loading: true,
        })
        console.log('Success:', values);
        axios.post(backend_url, values)
          .then(({data}) => {
            this.setState({
                dataresult: JSON.parse(data.data) ,
                loading: false,
                showResult: true,
                station:values.station,
                year:values.year,
                rerol:JSON.parse(data.row),
                renul:JSON.parse(data.nul),
                reano:JSON.parse(data.ano),
            })
            console.log(data)
          })
          .catch(error =>{
            console.log(error)
            this.setState({
              loading: false,
            })
            message.error('ไม่พบข้อมูลสถานีหรือปีอยู่ในฐานข้อมูล (กรุณาตรวจสอบให้แน่ใจว่าได้ทำการ Detect ข้อมูลไปแล้ว)')
          }
          )
    };
    callback(key) {
      console.log(key);
    }
    onFinish1 = (values) => {
      this.setState({
          loading1: true,
      })
      console.log('Success:', values);
      axios.post(backend_url1, values)
        .then(({data}) => {
          this.setState({
            loading1: false,
            dataanomaly: JSON.parse(data.anomaly),
            datazero: JSON.parse(data.zero),
            datazerotwo: JSON.parse(data.zerotwo),
            datanan: JSON.parse(data.nan),
            showResult1: true,
          })
        message.success('การตรวจจับข้อมูลสำเร็จ สามารถดำเนินการ Fill ข้อมูลในขั้นถัดไป')
        })
        .catch(error =>{
        console.log(error)
        this.setState({
          loading1: false,
        })
        message.error('ไม่พบข้อมูลสถานีหรือปีอยู่ในฐานข้อมูล')
        }
        )
  };
    
    
    render() {
        return (
            
            <Main>
            <Tabs onChange={this.callback} type="card">
            <TabPane tab="Detect" key="1">
            <Spin spinning={this.state.loading1} delay={500}>
              <Form
              layout='vertical'
              onFinish={this.onFinish1}
              >
                <Form.Item label="Station" name = "station">
                    
                    <Input />
                    
                </Form.Item>
                <Form.Item label="Year" name="year">
                  <Input />
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              </Spin>
              <div style={{ display: this.state.showResult1 ? "block" : "none" }}>
              มีชุดข้อมูลที่น่าสงสัยว่าผิดปกติประเภทค่า Extreme จำนวน {this.state.dataanomaly.length} ข้อมูล
              <Table dataSource={this.state.dataanomaly} columns={columns1} />
              มีชุดข้อมูลที่น่าสงสัยว่าผิดปกติประเภทค่า 0 จำนวน {this.state.datazero.length} ข้อมูล
              <Table dataSource={this.state.datazero} columns={columns1} />
              มีชุดข้อมูลที่น่าสงสัยว่าผิดปกติประเภทค่า 0.2 จำนวน {this.state.datazerotwo.length} ข้อมูล
              <Table dataSource={this.state.datazerotwo} columns={columns1} />
              มีข้อมูลที่สูญหายจำนวน {this.state.datanan.length} ข้อมูล
              <Table dataSource={this.state.datanan} columns={columns1} />
              </div>
            </TabPane>





            <TabPane tab="Fill" key="2">
            <Spin spinning={this.state.loading} delay={500}>
            <Form
            layout='vertical'
            onFinish={this.onFinish}
            >
            <Form.Item label="Station" name = "station">
              <Input />
            </Form.Item>
            <Form.Item label="CHK_HII" name = "check">
                <Select>
                    <Select.Option value="yes">Yes</Select.Option>
                    <Select.Option value="no">No</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="Year" name="year">
              <Input />
            </Form.Item>
            <Form.Item >
            <Form.Item label="Model" name = "model">
                <Select>
                    <Select.Option value="svr">svr</Select.Option>
                    <Select.Option value="randomforest">randomforest</Select.Option>
                    <Select.Option value="linear">lineart</Select.Option>
                </Select>
            </Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Spin>
          <div style={{ display: this.state.showResult ? "block" : "none" }}>
                <Texxt2 style={{color:'black'}}>ข้อมูลจำนวนทั้งหมด {this.state.rerol} ข้อมูล</Texxt2> 
                <Texxt2 style={{color:'black'}}>มีข้อมูลสูญหายจำนวนทั้งหมด {this.state.renul} ข้อมูล</Texxt2> 
                <Texxt2 style={{color:'black'}}>มีข้อมูลที่ตรวจจับว่าผิดปกติจำนวนทั้งหมด {this.state.reano} ข้อมูล</Texxt2> 
                <Table dataSource={this.state.dataresult} columns={columns} />
                <CSVLink
                    filename={"Result.csv"}
                    data={this.state.dataresult}
                    className="btn btn-primary"
                    >
                    Download File
                </CSVLink>
                <Texxt style={{marginTop:'20px'}}>ข้อมูลสถานี {this.state.station} ปี {this.state.year} ก่อนปรับปรุงข้อมูล </Texxt>
                <div style={{ height : "400px" }}>
                <Line {...this.config} data={this.state.dataresult}  />
                </div>
                  <div style={{display:'flex',marginTop:'20px'}}><Minicircle style={{background:'blue'}}></Minicircle> &nbsp;<Texxt2 style={{color:'blue'}}>ข้อมูลจริงที่ตรวจจับว่าไม่ผิดปกติ</Texxt2> </div>
                  <div style={{display:'flex',marginTop:'20px'}}><Minicircle style={{background:'red'}}></Minicircle> &nbsp;<Texxt2 style={{color:'red'}}>ข้อมูลจริงที่ตรวจจับว่าผิดปกติ</Texxt2> </div>
                <Texxt style={{marginTop:'20px'}}>ข้อมูลสถานี {this.state.station} ปี {this.state.year} หลังปรับปรุงข้อมูล </Texxt>
                <div style={{ height : "400px" }}>
                {/* <Line {...this.config} data={this.state.dataresult}  /> */}
                <Line {...this.config2} data={this.state.dataresult}  />
                </div>
                <div>
                  <div style={{display:'flex',marginTop:'20px'}}><Minicircle style={{background:'orange'}}></Minicircle> &nbsp;<Texxt2 style={{color:'orange'}}>ข้อมูลที่ทำนายแทนที่ข้อมูลสูญหาย</Texxt2> </div>
                  <div style={{display:'flex',marginTop:'20px'}}><Minicircle style={{background:'green'}}></Minicircle> &nbsp;<Texxt2 style={{color:'green'}}>ข้อมูลที่ทำนายแทนที่ข้อมูลที่ผิดปกติ</Texxt2> </div>
                </div>
            
            </div>
            </TabPane>
            </Tabs>
          </Main>
          


        )
    }
}
