const Tabs = (props) => {
  const { tabs, setTabs } = props;

  const changeActiveTab = (newActiveIndex) => {
    // e.preventDefault();
    const newTabs = [...tabs];
    newTabs.forEach((tab, index) => {
      tab.active = index === newActiveIndex;
      if(tab.active) {
        tab.onClick();
      }
    });
    setTabs(newTabs);
  };

  return (
    <>
      {tabs.map((tab, index) => (
        <button type="button" className={`mb-3 mt-3 btn btn-${tab.active ? 'active' : 'default'}`} onClick={ () => changeActiveTab(index) }>
          {tab.label}
        </button>
      ))}
    </>
  );
};
    
export default Tabs;
