import { PrimaryButton, DefaultButton } from '@fluentui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match, RouteComponentProps, useHistory } from 'react-router-dom';
import { AppState } from '../../store/appstate';
import { removeClient } from '../../store/client/actions';

type OwnProps = {
  match: match<{ id: string }>;
};

export const Detail: React.FC<OwnProps & RouteComponentProps> = (props) => {
  const client = useSelector((state: AppState) => { 
    const p = state.clientView.list.find((c) => c.id.toString() === props.match.params.id);
    return p;
  });

  const dispatch = useDispatch();
  let history = useHistory();

  const handleClick = () => {
    dispatch(removeClient(client?.id || 0));
    props.history.push("/clients");
  };
  
  const backClick = () => {
    history.goBack();
  };

  const p = client ? (
    <div className="post">
      <h1 className="center">{client.name}</h1>
      <p>{client.phoneNo}</p>
      <p>{client.address}</p>
      <div className="center">
        <PrimaryButton onClick={handleClick}>
          Delete
        </PrimaryButton>
        <DefaultButton onClick={backClick}>
          Back
        </DefaultButton>
      </div>
    </div>
  ) : (
    <div className="center">Loading person...</div>
  );
  return <div className="contianer">{p}</div>;
};