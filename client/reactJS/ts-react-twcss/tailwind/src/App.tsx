import { Component } from 'react';
import BaseTemp from './layouts/BaseTemplate';
import  { BrowserRouter } from "react-router-dom";
class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
        <BaseTemp />
      </BrowserRouter>
    );
  }
}
//home/fspoon/Devops/projects/node_modules/typescript
export default App;
