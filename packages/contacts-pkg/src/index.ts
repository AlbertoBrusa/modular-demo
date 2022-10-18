import { useState } from "react";

export interface Contact {
  name: string
  role: string
  email: string
  number: string
}

export const ModifyContacts = (): [Contact[], (newContact: Contact) => void] => {
  const [contacts, setContacts] = useState<Contact[]>([{name: "Persona One", role: "Professional Persona", email: "persona.one@example.com", number: "0733322211"}]);
  const addContact = (newContact: Contact) => setContacts(contacts => [...contacts, newContact]);
  return [contacts, addContact]
}

export const roles = ["Sofware Developer", "System Architect", "Scrum Master", "CTO"]