import { PrimaryButton, Stack, TextField } from '@fluentui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Vehicle } from '../../models/vehicle';
import { addVehicle } from '../../store/vehicle/actions';
import { IVehicleListProps } from './vehicleList';

export const VehicleAdd: React.FC<IVehicleListProps> = (props) => {
   const _default = { id: 0, name: '', phoneNo: '' };
   const [newVehicle, setNewVehicle] = React.useState<Vehicle>(_default);
   const dispatch = useDispatch();

   const updateNewVehicle = (e: any) =>
   {
       setNewVehicle({
        ...newVehicle,
        [e.target.name]: e.target.value 
       });
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addVehicle(newVehicle));
    setNewVehicle(_default);
  };

    return (
        <form onSubmit={handleSubmit}>
        {
          props.isDuplicate ? (<></>) : (
            
            <Stack horizontal tokens={{childrenGap: 10}}>
              <TextField
                name="name"
                placeholder="Enter name"
                value={newVehicle.name}
                onChange={updateNewVehicle}
              />
              <TextField
                name="phoneNo"
                placeholder="Enter phone No"
                value={newVehicle.phoneNo}
                onChange={updateNewVehicle}
              />
              <PrimaryButton type="submit">Add</PrimaryButton>
            </Stack>
            )
        }
        </form>
    );
};