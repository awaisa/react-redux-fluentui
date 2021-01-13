import { ClientView } from '../../models/client';
import { Actions } from './actions'

const initState = {
  list: [
    {id: 1, name:"Awais", phoneNo: "033456098", address: "WhatsApp Inc. 1601 Willow Road Menlo Park, California 94025. United States of America. WhatsApp Inc"},
    {id: 2, name:"Ahmed", phoneNo: "033456098", address: "WhatsApp Inc. 1601 Willow Road Menlo Park, California 94025. United States of America. WhatsApp Inc"},
    {id: 3, name:"Saad", phoneNo: "033456098", address: "WhatsApp Inc. 1601 Willow Road Menlo Park, California 94025. United States of America. WhatsApp Inc"},
    {id: 4, name:"Haad", phoneNo: "033456098", address: "WhatsApp Inc. 1601 Willow Road Menlo Park, California 94025. United States of America. WhatsApp Inc"},
    {id: 5, name:"Zaid", phoneNo: "033456098", address: "WhatsApp Inc. 1601 Willow Road Menlo Park, California 94025. United States of America. WhatsApp Inc"},
    {id: 6, name:"Ashir", phoneNo: "033456098", address: "WhatsApp Inc. 1601 Willow Road Menlo Park, California 94025. United States of America. WhatsApp Inc"},
    { id: 7, name: "Furqan", phoneNo: "033456098", address: "WhatsApp Inc. 1601 Willow Road Menlo Park, California 94025. United States of America. WhatsApp Inc" },
  ],
  search: ''
};

export function clientViewReducer(state: ClientView = initState, action: Actions) {
  switch (action.type) {
    case "SearchClient":
      const { search } = action.payload;
      return {
        ...state,
        list: initState.list.filter(i => i.name.toLowerCase().indexOf(search) > -1)
      };
    case "AddClient":
      const newid = state.list.length + 1;
      action.payload.id = newid;
      state.list.push(action.payload);
      return {
        ...state,
        list: [
          ...state.list
        ]
      };
      case "RemoveClient":
      return {
        ...state,
        list: state.list.filter(c => c.id !== action.payload)
      };
      default:
        //neverReached(action);
    }
    return state;
  }
  
  //function neverReached(never: never) {}
  