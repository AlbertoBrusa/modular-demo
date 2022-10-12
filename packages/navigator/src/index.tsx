import * as React from 'react';
import logo from './assets/modular-hero.svg';
import { ToolkitProvider } from '@jpmorganchase/uitk-core';
import {
  AppHeader,
  Logo,
  Tab,
  Tabstrip,
  TabstripProps,
  Tooltray,
} from '@jpmorganchase/uitk-lab';
import '@jpmorganchase/uitk-theme/index.css';
import './EsmView.css';

const colours = [
  'yellow',
  'red',
  'cornflowerblue',
  'brown',
  'green',
  'purple',
  'orange',
  'lime',
  'silver',
  'maroon',
];

const useTabSelection = (): [number, TabstripProps['onActiveChange']] => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const handleTabSelection = (tabIndex: number) => {
    setSelectedTab(tabIndex);
  };
  return [selectedTab, handleTabSelection];
};

export default function EsmView(): JSX.Element {
  const [selectedTab, handleTabSelection] = useTabSelection();
  const tabs = ['Home', 'Transactions', 'FX', 'Checks', 'Loans'];
  return (
      <ToolkitProvider theme="light" density="medium">
        <AppHeader>
          <Logo
            data-align-start
            data-collapsible="instant"
            data-index={0}
            data-priority={1}
            src={logo}
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
          ></Tooltray>
        </AppHeader>
        {tabs.map((label, idx) => (
          <div
            aria-hidden={selectedTab !== idx}
            hidden={selectedTab !== idx}
            key={idx}
            style={{ borderBottom: `solid 10px ${colours[idx]}` }}
            
          />
        ))}
      </ToolkitProvider>
  );
}
