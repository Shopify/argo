import {BaseInput} from './BaseInput';

export interface CashTrackingSessionStartInput extends BaseInput {
  id: string;
  openingTime: string;
}

export interface CashTrackingSessionEndInput extends BaseInput {
  id: string;
  closingTime: string;
}

export interface CashTrackingSessionCancelInput extends BaseInput {
  id: string;
  closingTime: string;
}
