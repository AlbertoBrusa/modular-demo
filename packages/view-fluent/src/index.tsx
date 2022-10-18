import React, { useCallback } from 'react';
import {
  Stack,
  ThemeProvider,
  Persona,
  PersonaSize,
  DefaultEffects,
  TextField,
  MaskedTextField,
} from '@fluentui/react';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { Contact } from 'contacts-pkg';
import { useForm, SubmitHandler } from 'react-hook-form';
import { darkTheme, lightTheme, buttonStackTokens, stackTokens } from './theme';

interface ViewProps {
  theme: string;
  modifyCounter: [number, (modifier: number) => void];
  modifyContacts: [Contact[], (newContact: Contact) => void];
}

export default function ViewFluent({
  theme,
  modifyCounter,
  modifyContacts,
}: ViewProps): JSX.Element {
  const [count, modifyCount] = modifyCounter;
  const [contacts, addContacts] = modifyContacts;
  const onAdd = useCallback(() => modifyCount(1), [modifyCount]);
  const onSubtract = useCallback(() => modifyCount(-1), [modifyCount]);
  const activeTheme = theme === 'dark' ? darkTheme : lightTheme;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>();
  const onSubmit: SubmitHandler<Contact> = (data) => {
    addContacts(data);
  };

  return (
    <ThemeProvider applyTo="body" theme={activeTheme}>
      <div style={{ boxShadow: DefaultEffects.elevation4, padding: '20px' }}>
        <h1> Counter </h1>
        <Stack horizontal tokens={stackTokens}>
          <h1>
            <PrimaryButton text="-" onClick={onSubtract} allowDisabledFocus />{' '}
            {count}{' '}
            <PrimaryButton text="+" onClick={onAdd} allowDisabledFocus />
          </h1>
        </Stack>
      </div>
      <div style={{ boxShadow: DefaultEffects.elevation4, padding: '20px' }}>
        <h1> Contacts </h1>
        <div style={{ boxShadow: DefaultEffects.elevation8, padding: '20px' }}>
          <h2> Add new contact </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack horizontal tokens={stackTokens}>
              <TextField
                label="Name"
                {...register('name', { required: true })}
                placeholder="Name"
                required
              />
              <TextField
                label="Role"
                {...register('role', { required: true })}
                placeholder="Role"
                required
              />
            </Stack>
            <Stack horizontal tokens={stackTokens}>
              <TextField
                label="Email"
                suffix="@example.com"
                {...register('email', { required: true })}
                required
              />
            </Stack>
            <Stack horizontal tokens={stackTokens}>
              <MaskedTextField
                label="Number"
                mask="(+99) 99999 9999"
                {...register('number', { required: true })}
              />
            </Stack>
            <div style={{ paddingTop: '20px' }}>
              <Stack horizontal tokens={buttonStackTokens}>
                <DefaultButton text="Clear" type="reset" />
                <PrimaryButton text="Submit" type="submit" />
              </Stack>
            </div>
          </form>
        </div>
        {contacts.map((contact, idx) => (
          <div
            style={{ boxShadow: DefaultEffects.elevation16, padding: '20px' }}
            key={idx}
          >
            <Persona
              text={contact.name}
              secondaryText={contact.role}
              tertiaryText={contact.email}
              optionalText={contact.number}
              size={PersonaSize.size100}
            />
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
}
