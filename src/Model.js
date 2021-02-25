import React, { Component } from 'react'
import styled from 'styled-components'
import tableau from "tableau-api";
import { Form, Input, Button, Select, Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import { CSVLink } from "react-csv";
import { Line } from '@ant-design/charts';
const backend_url = "http://localhost:5050/api"
// const url = 'https://public.tableau.com/views/ModelVisualization/Dashboard1?:language=en&:display_count=y&publish=yes&:toolbar=n&:origin=viz_share_link'

const Result = [{DateTime: "1", Rain1h: 200, Rain1h_Predict: 2, Anomaly_Sig: 2},{DateTime: "2", Rain1h: 300, Rain1h_Predict: 2, Anomaly_Sig: 1},{DateTime: "3", Rain1h: 200, Rain1h_Predict: 2, Anomaly_Sig: 1}]
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

const Main = styled.div`
    padding-left:30%;
    padding-right:30%;
    padding-bottom:30%;
    width:100%;
    display:flex;
    flex-direction:column;
    // align-items: center;
    // justify-content: center;
   
`
const Iframe1 = styled.iframe`
@media (max-width: 1249px) {
    display:none
}
`
const Iframe2 = styled.iframe`
display:none;
@media (max-width: 1249px) and (min-width: 768px)  {
    display:block
}
`
const Iframe3 = styled.iframe`

@media (min-width: 768px)  {
    display:none
}
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
        dataresult: Result,
        loading: false,
        showResult: false,
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
            fields: ['Rain1h'],
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
                dataresult: data ,
                loading: false,
                showResult: true,
            })
            console.log(data)
          });
    };
    
    render() {
        return (
            
            <Main>
            <Spin spinning={this.state.loading} delay={500}>
            <Form
            layout='vertical'
            onFinish={this.onFinish}
            >
            <Form.Item label="Station" name = "station">
                <Select>
                    <Select.Option value="BLKO">BLKO</Select.Option>
                </Select>
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
                <Table dataSource={this.state.dataresult} columns={columns} />
                <CSVLink
                    filename={"Result.csv"}
                    data={this.state.dataresult}
                    className="btn btn-primary"
                    >
                    Download File
                </CSVLink>
            
                <div style={{ height : "400px" }}>
                <Line {...this.config} data={this.state.dataresult}  />
                <Line {...this.config2} data={this.state.dataresult}  />
                </div>
            
            </div>
          </Main>
          


        )
    }
}
