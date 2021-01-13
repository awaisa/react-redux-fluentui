import { DetailsList, DetailsListLayoutMode, TextField, Stack, PrimaryButton, IColumn } from '@fluentui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Client, ClientView } from '../../models/client';
import { AppState } from '../../store/appstate';
import { searchClient } from '../../store/client/actions';
// import { addPerson, removePerson } from '../../store/people/actions';

 export const Clients: React.FC<RouteComponentProps> = (props) => {
    const [, setSearch] = React.useState('');
    const view: ClientView = useSelector((state: AppState) => state.clientView);
    const dispatch = useDispatch();
  
    const handleOnChange = (e: any) => {
      setSearch(e.target.value);
      view.search = e.target.value;
      dispatch(searchClient(view));
    }
  
  const searchOnClick = () => {
    dispatch(searchClient(view));
  };
    
    const _columns = [
      { key: 'Name', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'phoneNo', name: 'Phone No', fieldName: 'phoneNo', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'address', name: 'Address', fieldName: 'address', minWidth: 100, maxWidth: 200, isResizable: true },
    ];
    const _onItemInvoked = (item: Client): void => {
      alert(`Item invoked: ${item.name}`);
   };
   
   const _renderItemColumn = (item?: Client, index?: number, column?: IColumn) => {
     const fieldContent = item![column!.fieldName as keyof Client] as string;
    
     switch (column!.key) {
       case 'Name':
         return <Link to={"/client-detail/"+item?.id}>{fieldContent}</Link>;
    
       default:
         return <span>{fieldContent}</span>;
     }
   };

    return (
      <div>
        <h1>Clients</h1>
        <Stack horizontal grow tokens={{childrenGap: 10}}>
          <TextField
            name="search"
            placeholder="Search"
            onChange={handleOnChange}
          />
          <PrimaryButton text="Search" onClick={searchOnClick} style={{maxWidth: "30px"}} />
          <PrimaryButton text="Add" onClick={() => props.history.push('/client-create')} style={{ maxWidth: "30px" }} />
        </Stack>
        
        <DetailsList
          items={view.list}
          columns={_columns}
          setKey="set"
          onRenderItemColumn={_renderItemColumn}
          layoutMode={DetailsListLayoutMode.justified}
          selectionPreservedOnEmptyClick={true}
          //selectionMode={SelectionMode.single}
          onItemInvoked={_onItemInvoked}
        />        
      </div>
    );
  };