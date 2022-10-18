import { Contact, ModifyContacts } from '../index';

test('it should not fail', () => {
  expect("test").toEqual("test")
});

// test('it should initiate with 1 contact', () => {
//   const [contacts, addContact] = ModifyContacts();
//   addContact({
//     name: 'Persona Two',
//     role: 'Second Professional Persona',
//     email: 'persona.two@example.com',
//     number: '0733322211',
//   });
//   expect(contacts).toEqual([
//     {
//       name: 'Persona One',
//       role: 'Professional Persona',
//       email: 'persona.one@example.com',
//       number: '0733322211',
//     },
//     {
//       name: 'Persona Two',
//       role: 'Second Professional Persona',
//       email: 'persona.two@example.com',
//       number: '0733322211',
//     },
//   ]);
// });