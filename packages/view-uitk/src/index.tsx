import React, { useCallback } from 'react';
import { Button, Card, FormField, Input } from '@jpmorganchase/uitk-core';
import {
  AddIcon,
  CallIcon,
  MessageIcon,
  RemoveIcon,
} from '@jpmorganchase/uitk-icons';
import { Contact, roles } from 'contacts-pkg';
import {
  ContactAvatar,
  ContactDetails,
  ContactMetadata,
  ContactMetadataItem,
  ContactPrimaryInfo,
  ContactSecondaryInfo,
  Dropdown,
} from '@jpmorganchase/uitk-lab';
import { useForm, SubmitHandler } from 'react-hook-form';
import { rowStyle, buttonRowStyle } from './theme';

interface ViewProps {
  modifyCounter: [number, (modifier: number) => void];
  modifyContacts: [Contact[], (newContact: Contact) => void];
}

export default function ViewUitk({
  modifyCounter,
  modifyContacts,
}: ViewProps): JSX.Element {
  const [count, modifyCount] = modifyCounter;
  const [contacts, addContacts] = modifyContacts;
  const onAdd = useCallback(() => modifyCount(1), [modifyCount]);
  const onSubtract = useCallback(() => modifyCount(-1), [modifyCount]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>();
  const onSubmit: SubmitHandler<Contact> = (data) => {
    console.log('Submitted');
    console.log(errors);
    addContacts(data);
  };

  return (
    <div>
      <Card>
        <h1> Counter </h1>
        <h1>
          <Button onClick={onSubtract}>
            <RemoveIcon />
          </Button>{' '}
          {count}{' '}
          <Button onClick={onAdd}>
            <AddIcon />
          </Button>
        </h1>
      </Card>
      <Card>
        <h1> Contacts </h1>
        <Card>
          <h2> Add new contact</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={rowStyle}>
              <div style={{ width: '200px' }}>
                <FormField
                  label="Name"
                  className="uitkEmphasisHigh"
                  disableFocusRing
                >
                  <Input {...register('name', { required: true })} />
                </FormField>
              </div>
              <div style={{ width: '200px' }}>
                <FormField
                  helperText="Select a role"
                  label="Role"
                  disableFocusRing
                >
                  <Dropdown
                    source={roles}
                    {...register('role', { required: true })}
                  />
                </FormField>
              </div>
            </div>
            <div style={rowStyle}>
              <div style={{ width: '350px' }}>
                <FormField
                  label="Email"
                  disableFocusRing
                  helperText="firstname.lastname@example.com"
                >
                  <Input {...register('email', { required: true })} />
                </FormField>
              </div>
            </div>
            <div style={rowStyle}>
              <div style={{ width: '200px' }}>
                <FormField
                  label="Number"
                  disableFocusRing
                  helperText="(+99) 99999 9999"
                >
                  <Input {...register('number', { required: true })} />
                </FormField>
              </div>
            </div>
            <div style={buttonRowStyle}>
              <Button variant="primary" type="reset">
                {' '}
                Clear{' '}
              </Button>
              <Button variant="cta" type="submit" onClick={() => onSubmit}>
                {' '}
                Submit{' '}
              </Button>
            </div>
          </form>
        </Card>
        {contacts.map((contact, idx) => (
          <Card key={idx}>
            <ContactDetails>
              <ContactAvatar />
              <ContactPrimaryInfo text={contact.name} />
              <ContactSecondaryInfo text={contact.role} />
              <ContactMetadata>
                <ContactMetadataItem
                  value={contact.email}
                  label="Email"
                  icon={MessageIcon}
                />
                <ContactMetadataItem
                  value={contact.number}
                  label="Office"
                  icon={CallIcon}
                />
              </ContactMetadata>
            </ContactDetails>
          </Card>
        ))}
      </Card>
    </div>
  );
}
