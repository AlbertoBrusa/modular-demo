import * as React from 'react';
import { render } from 'react-dom';
import { ModifyCounter } from 'counter-pkg';
import ViewFluent from '../index';
import { ModifyContacts } from 'contacts-pkg';

test('it should render', () => {
  const el = document.createElement('div');
  expect(() =>
    render(<ViewFluent theme={'light'} modifyCounter={ModifyCounter()} modifyContacts={ModifyContacts()} />, el),
  ).not.toThrow();
});
