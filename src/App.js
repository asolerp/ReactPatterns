import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Breadcrumb } from './components/Breadcrumbs/Breadcrumb';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tabs/Tab';
import TabPanel from './components/Tabs/TabPanel';
import Button from './components/Button/Button'
import withNameOverride from './hoc/withNameOverrie';
import withStyleChanged from './hoc/withStyleChanged';
import RepositoriesHooks from './components/RepositoriesHooks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button name="Alberto"></Button>
        <ButtonTextChanged></ButtonTextChanged>
        <ButtonStyleChanged name="Alberto"></ButtonStyleChanged>
      </header>
      <body>
        <RepositoriesHooks></RepositoriesHooks>
        <Breadcrumb>
          <Breadcrumb.Item href="/frontend">
            Frontend
          </Breadcrumb.Item>
          <Breadcrumb.Item  href="/frontend/frameworks"> 
            FrameWorks
          </Breadcrumb.Item>
          <Breadcrumb.Item active href="/frontend/frameworks/react">
            React
          </Breadcrumb.Item >
        </Breadcrumb>
        <Tabs initialValue="tab-react">
          <Tab name="tab-react">
            React.js
          </Tab>
          <Tab name="tab-vue">
            Vue.js
          </Tab>
          <TabPanel name="tab-react">
            React.js content
          </TabPanel>
          <TabPanel name="tab-vue">
            Vue.js content
          </TabPanel>
        </Tabs>
      </body>
    </div>
  );
}

const ButtonTextChanged = withNameOverride(Button)
const ButtonStyleChanged = withStyleChanged(Button)

export default App;
