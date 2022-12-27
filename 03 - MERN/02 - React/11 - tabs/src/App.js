import './App.css';
import Tabs from './components/Tabs';
import TabDisplay from './components/TabDisplay';
import { useState } from 'react';

function App() {
  // callback function for each tab
  const callAlert = (message) => {
    setTimeout(() => {
      alert(message);
    }, "3000");

  }

  const [tabs, setTabs] = useState([
    {active: true, label: "Tab 1", content: "Tab 1 content is showing here", onClick: () =>(callAlert("Hey from Tab 1")) },
    {active: false, label: "Tab 2", content: "Tab 2 content is showing here", onClick: () =>(callAlert("Hey from Tab 2")) },
    {active: false, label: "Tab 3", content: "Tab 3 content is showing here", onClick: () =>(callAlert("Hey from Tab 3")) },
  ]);

  const activeTab = tabs.find(tab => tab.active);
  return (
    <div className="App">
      <Tabs tabs={ tabs } setTabs={ setTabs } />
      <TabDisplay message= { activeTab.content } />
    </div>
  );
}

export default App;
