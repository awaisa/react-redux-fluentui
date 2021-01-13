import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match, RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../store/appstate';
import { removeVehicle } from '../../store/vehicle/actions';

type OwnProps = {
  match: match<{ id: string }>;
};

export const Detail: React.FC<OwnProps & RouteComponentProps> = (props) => {
  const vehicle = useSelector((state: AppState) => { 
    const p = state.vehicle.find((p) => p.id.toString() === props.match.params.id);
    return p;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeVehicle(vehicle?.id || 0));
    props.history.push("/");
  };
  const v = vehicle ? (
    <div className="post">
      <h4 className="center">{vehicle.name}</h4>
      <p>{vehicle.phoneNo}</p>
      <div className="center">
        <button className="btn" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading vehicle...</div>
  );
  return <div className="contianer">{v}</div>;
};