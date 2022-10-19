import * as React from 'react';
import logo from './assets/modular-hero.svg';

import { ToolkitProvider, Switch, Panel, Card } from '@jpmorganchase/uitk-core';
import {
  AppHeader,
  Logo,
  Tab,
  Tabstrip,
  TabstripProps,
  Tooltray,
} from '@jpmorganchase/uitk-lab';
import '@jpmorganchase/uitk-theme/index.css';
import ViewUitk from 'view-uitk';
import './App.css';
import { ChangeEvent } from 'react';
import ViewFluent from 'view-fluent';
import { ModifyCounter } from 'counter-pkg';
import { Contact, ModifyContacts } from 'contacts-pkg';

const useTabSelection = (): [number, TabstripProps['onActiveChange']] => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleTabSelection = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };
  return [selectedTab, handleTabSelection];
};

export default function App(): JSX.Element {
  const modifyCounter = ModifyCounter();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const modifyContacts: [Contact[], (newContact: Contact) => void] =
    ModifyContacts() as [Contact[], (newContact: Contact) => void];
  const [theme, setTheme] = React.useState('light');
  const [selectedTab, handleTabSelection] = useTabSelection();
  const views = [
    <ViewUitk modifyCounter={modifyCounter} modifyContacts={modifyContacts} />,
    <ViewFluent
      theme={theme}
      modifyCounter={modifyCounter}
      modifyContacts={modifyContacts}
    />,
  ];
  const tabs = ['UITK Demo', 'Fluent Demo'];
  const changeTheme = (
    _: ChangeEvent<HTMLInputElement>,
    isChecked: boolean,
  ) => {
    isChecked ? setTheme('dark') : setTheme('light');
  };
  return (
    <ToolkitProvider theme={theme} density="medium">
      <AppHeader>
        <Logo
          data-align-start
          data-collapsible="instant"
          data-index={0}
          data-priority={1}
          src="https://raw.githubusercontent.com/jpmorganchase/modular/main/docs/img/modular-hero.svg"
          appTitle="Modular Demo"
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
          <Switch label="Theme Toggle" onChange={changeTheme} />
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
    </ToolkitProvider>
  );
}
