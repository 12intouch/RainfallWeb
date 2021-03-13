
// import './App.css';
import Bar from './Bar.js'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Viz from './Viz.js'
import Overview from "./Overview.js"
import styled from 'styled-components'
import Model from './Model.js'
const Divbox = styled.div`
// margin-top:120px;
// margin-left:22%;
// margin-right:22%;
// @media (max-width: 2000px) {
//   margin-left:15%;
//   margin-right:15%;
// }
// @media (max-width: 1315px) {
//   margin-left:10%;
//   margin-right:10%;
// }
// @media (max-width: 411px) {
//   margin-left:5%;
//   margin-right:5%;
// }

`



const Mainroute = () => {
  return <Redirect to={`/RanifallWeb/overview`} />;
};
function App() {
  
  
  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Bar />
            <Divbox
              style={{
                marginTop: '120px',
                // marginLeft: '22%',
                // marginRight: '22%',
              }}
            >
              <Switch>
                <Mainroute exact path={`/`} />
                <Mainroute exact path={`/RanifallWeb`} />
                <Route exact path='/RainfallWeb/overview' component={Overview} />
                <Route exact path='/RainfallWeb/vizualize' component={Viz}/>
                <Route exact path='/RainfallWeb/model' component={Model} />
              </Switch>
            </Divbox>
            {/* <Footer /> */}
          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
