import React, { Component } from 'react'
import styled from 'styled-components'
import tableau from "tableau-api";
// const url = 'https://public.tableau.com/views/ModelVisualization/Dashboard1?:language=en&:display_count=y&publish=yes&:toolbar=n&:origin=viz_share_link'
const Main = styled.div`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
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


export default class Viz extends Component {
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
    render() {
        return (
            <Main>
            {/* <div ref = {div => this.vizContainer = div}>
            </div> */}
            <Iframe1 src="https://public.tableau.com/views/ModelVisualization/Dashboard1?:showVizHome=no&:embed=true" width="1250" height="1600"></Iframe1>
            <Iframe2 src="https://public.tableau.com/views/ModelVisualization/Dashboard1?:showVizHome=no&:embed=true" width="768" height="1700"></Iframe2>
            <Iframe3 src="https://public.tableau.com/views/ModelVisualization/Dashboard1?:showVizHome=no&:embed=true" width="375" height="1100"></Iframe3>
            
            </Main>
            
        )
    }
}
