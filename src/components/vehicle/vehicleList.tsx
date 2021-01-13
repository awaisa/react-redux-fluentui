import { DetailsList, DetailsListLayoutMode, IColumn, Link } from '@fluentui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Vehicle } from '../../models/vehicle';
import { AppState } from '../../store/appstate';
import { removeVehicle } from '../../store/vehicle/actions';
import { VehicleAdd } from './vehicleAdd';

export interface IVehicleListProps { 
  title: string,
  isDuplicate?: boolean
}
  
 export const VehicleList: React.FC<IVehicleListProps> = (props) => {
   const { title } = props;

    const vehicles: Vehicle[] = useSelector((state: AppState) => state.vehicle);
    const dispatch = useDispatch();
  
    const dispatchNewVehicle = (id: number) => () => {
      dispatch(removeVehicle(id));
    };
  
    const _columns = [
      { key: 'name', name: 'name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'phoneNo', name: 'Phone No', fieldName: 'phoneNo', minWidth: 100, maxWidth: 200, isResizable: true },
   ];
   
    if(!props.isDuplicate){
      _columns.push({ key: 'delete', name: 'delete', fieldName: '', minWidth: 100, maxWidth: 200, isResizable: true });
    }
    const _renderItemColumn = (item?: Vehicle, index?: number, column?: IColumn) => {
      const fieldContent = item![column!.fieldName as keyof Vehicle] as string;
     
      switch (column?.key) {
        case 'delete':
          return (props.isDuplicate ? '' : <Link onClick={dispatchNewVehicle(item?.id || 0)}>delete</Link>);
     
        default:
          return <span>{fieldContent}</span>;
      }
   };
   
    return (
      <div>
        <h1>{ title }</h1>
        <DetailsList
          items={vehicles}
          columns={_columns}
          setKey="set"
          onRenderItemColumn={_renderItemColumn}
          layoutMode={DetailsListLayoutMode.justified}
          selectionPreservedOnEmptyClick={true}
          //selectionMode={SelectionMode.single}
        />
        <VehicleAdd {...props}></VehicleAdd>
      </div>
    );
  };
  
  