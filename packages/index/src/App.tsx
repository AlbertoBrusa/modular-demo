import * as React from 'react';
import { ToolkitProvider, Panel, Card } from '@jpmorganchase/uitk-core';
import {
  AppHeader,
  Logo,
  Tab,
  Tabstrip,
  TabstripProps,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupChangeEventHandler,
  Tooltray,
} from '@jpmorganchase/uitk-lab';
import '@jpmorganchase/uitk-theme/index.css';
import ViewUitk from 'view-uitk';
import './App.css';
import ViewFluent from 'view-fluent';
import { ModifyCounter } from 'counter-pkg';
import { Contact, ModifyContacts } from 'contacts-pkg';
import ModularLogo from './assets/modular-hero.svg';

const useTabSelection = (): [number, TabstripProps['onActiveChange']] => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleTabSelection = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };
  return [selectedTab, handleTabSelection];
};

export default function App(): JSX.Element {
  const modifyCounter = ModifyCounter();
  const modifyContacts: [Contact[], (newContact: Contact) => void] =
    ModifyContacts() as [Contact[], (newContact: Contact) => void];
  const [selectedTab, handleTabSelection] = useTabSelection();
  const [theme, setTheme] = React.useState('light');
  const views = [
    <ViewUitk modifyCounter={modifyCounter} modifyContacts={modifyContacts} />,
    <ViewFluent
      theme={theme}
      modifyCounter={modifyCounter}
      modifyContacts={modifyContacts}
    />,
  ];
  const tabs = ['UITK Demo', 'Fluent Demo'];
  const changeTheme: ToggleButtonGroupChangeEventHandler = (_, index) => {
    index === 1 ? setTheme('dark') : setTheme('light');
  };
  return (
    <ToolkitProvider theme={theme} density="medium">
      <Panel style={{height: '100pc', padding: 0}}>
        <AppHeader>
          <Logo
            data-align-start
            data-index={0}
            data-priority={1}
            src={ModularLogo}
            appTitle="Toolkit"
          />
          <Tabstrip
            data-index={1}
            data-priority={2}
            onActiveChange={handleTabSelection}
          >
            {tabs.map((label, i) => (
              <Tab label={label} key={i} />
            ))}
          </Tabstrip>
          <Tooltray
            data-collapsible="dynamic"
            data-index={2}
            data-priority={1}
            data-align-end
            data-reclaim-space
          >
            <ToggleButtonGroup onChange={changeTheme}>
              <ToggleButton tooltipText="Light theme">Light</ToggleButton>
              <ToggleButton tooltipText="Dark theme">Dark</ToggleButton>
            </ToggleButtonGroup>
          </Tooltray>
        </AppHeader>
        <Panel>
          <Card>
            {tabs.map((label, idx) => (
              <div
                aria-hidden={selectedTab !== idx}
                hidden={selectedTab !== idx}
                key={idx}
              >
                {views[idx]}
              </div>
            ))}
          </Card>
        </Panel>
      </Panel>
    </ToolkitProvider>
  );
}
