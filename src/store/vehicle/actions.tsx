import { Dispatch } from "redux";
import { Vehicle } from "../../models/vehicle";

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export type AddVehicleAction = {
  readonly type: "AddVehicle";
  readonly payload: Vehicle;
};

export const addVehicle = (Vehicle: Vehicle) => async (
  dispatch: Dispatch<AddVehicleAction>
) => {
  console.log('in async Dispatch');
  await wait(500);
  console.log('in async Dispatch after wait 500');

  dispatch({
    type: "AddVehicle",
    payload: Vehicle
  } as const);
};

export type RemoveVehicleAction = {
  readonly type: "RemoveVehicle";
  readonly payload: number;
};

export const removeVehicle = (id: number) => async (
  dispatch: Dispatch<RemoveVehicleAction>
) => {
  await wait(100);
  dispatch({
    type: "RemoveVehicle",
    payload: id
  } as const);
};

export type Actions = AddVehicleAction | RemoveVehicleAction;
