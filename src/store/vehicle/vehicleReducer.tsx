import { Vehicle } from '../../models/vehicle';
import {Actions} from './actions'

const initState = [
  {id: 1, name:"Awais", phoneNo: "033456098"},
  {id: 2, name:"Ahmed", phoneNo: "033456098"},
  {id: 3, name:"Saad", phoneNo: "033456098"},
  {id: 4, name:"Haad", phoneNo: "033456098"},
  {id: 5, name:"Zaid", phoneNo: "033456098"},
  {id: 6, name:"Ashir", phoneNo: "033456098"},
  {id: 7, name:"Furqan", phoneNo: "033456098"},
];

export function peopleReducer(state: Vehicle[] = initState, action: Actions) {
    switch (action.type) {
      case "AddVehicle":
        const newid = state.length + 1;
        return [
          ...state,
          {
            ...action.payload,
            id: newid,
          }
        ]
        //.concat({ id: state.length + 1, name: action.payload });
      case "RemoveVehicle":
        return state.filter(vehicle => vehicle.id !== action.payload);
      default:
        neverReached(action);
    }
    return state;
  }
  
  function neverReached(never: never) {}
  