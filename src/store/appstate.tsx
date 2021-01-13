import { Vehicle } from '../models/vehicle';
import { ClientView } from '../models/client';

export type AppState = {
  vehicle: Vehicle[];
  clientView: ClientView;
};
  