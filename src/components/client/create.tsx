import { DefaultButton, PrimaryButton, Stack, TextField } from '@fluentui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Client } from '../../models/client';
import { addClient } from '../../store/client/actions';

 export const Create : React.FC<RouteComponentProps> = (props) => {
//    const { title } = props;
   const _default = { id: 0, name: '', phoneNo: '', address: '' };
   const [newClient, setNewClient] = React.useState<Client>(_default);

     const handleOnChange = (e: any) => {
         //setNewPerson(e.currentTarget.value);
         setNewClient({
             ...newClient,
             [e.target.name]: e.target.value
         });
     };
     
    const dispatch = useDispatch();
    let history = useHistory();
  
     const onSave = () => {
        dispatch(addClient(newClient));
        setNewClient(_default);
        props.history.push('/clients');
    };
 
    const backClick = () => {
        history.goBack();
    };
     
    return (
        <Stack tokens={{ childrenGap: 20 }} styles={{ root: {width: 300}}}>
            <TextField placeholder="Enter name" name="name" onChange={handleOnChange} />
            <TextField placeholder="Enter phone no" name="phoneNo" onChange={handleOnChange} />
            <TextField placeholder="Enter address" name="address" onChange={handleOnChange} />
            <PrimaryButton text="Save" onClick={onSave} />
            <DefaultButton text="Back" onClick={backClick} />
      </Stack>
    );
  };
  
  