import * as React from 'react';
import { render } from 'react-dom';
import ViewUitk from '../index';
import { ModifyCounter } from 'counter-pkg';
import { ModifyContacts } from 'contacts-pkg';

test('it should render', () => {
  const el = document.createElement('div');
  expect(() =>
    render(<ViewUitk modifyCounter={ModifyCounter()} modifyContacts={ModifyContacts()} />, el),
  ).not.toThrow();
});
