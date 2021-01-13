import { Dispatch } from "redux";
import { Client, ClientView } from "../../models/client";

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export type SearchClientAction = {
  readonly type: "SearchClient";
  readonly payload: ClientView;
};

export const searchClient = (clientView: ClientView) => async (
  dispatch: Dispatch<SearchClientAction>
) => {
  // ajax promise
  await wait(3000).then(r => {
    
    dispatch({
      type: "SearchClient",
      payload: clientView
    } as const);  
  
  });
};


export type AddClientAction = {
  readonly type: "AddClient";
  readonly payload: Client;
};

export const addClient = (client: Client) => async (
  dispatch: Dispatch<AddClientAction>
) => {
  
  //console.log('in async Dispatch');
  //await wait(2000);
  //console.log('in async Dispatch after wait 2000');

  dispatch({
    type: "AddClient",
    payload: client
  } as const);

};

export type RemoveClientAction = {
  readonly type: "RemoveClient";
  readonly payload: number;
};

export const removeClient = (id: number) => async (
  dispatch: Dispatch<RemoveClientAction>
) => {
  //await wait(2000);
  dispatch({
    type: "RemoveClient",
    payload: id
  } as const);
};

export type Actions = AddClientAction | RemoveClientAction | SearchClientAction;
