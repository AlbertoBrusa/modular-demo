import { Contact, ModifyContacts } from '../index';

test('it should initiate with 0 contacts', () => {
  const [contacts, addContact] = ModifyContacts();
  expect(contacts).toEqual([]);
});
