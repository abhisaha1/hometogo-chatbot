export interface BaseOption {
  question: string;
}

export interface Budget extends BaseOption {
  low: number;
  high: number;
  __typename: 'budget';
}

export interface Guests extends BaseOption {
  adults: number;
  kids: number;
  __typename: 'guests';
}

export interface Dates extends BaseOption {
  startDate: Date;
  endDate: Date;
  __typename: 'dates';
}

export interface Destination extends BaseOption {
  distination: string;
  __typename: 'destination';
}

export interface Mood extends BaseOption {
  mood: string;
  __typename: 'mood';
}

export interface Offers extends BaseOption {
  offers: [];
  __typename: 'offers';
}

export interface Entry extends BaseOption {
  isflexible?: boolean;
  __typename: 'entry';
}

export enum Steps {
  Budget = 'Budget',
  Guests = 'Guests',
  Dates = 'Dates',
  Destination = 'Destination',
  Mood = 'Mood',
  Offers = 'Offers',
  Entry = 'Entry',
}

export type Options =
  | Budget
  | Guests
  | Dates
  | Destination
  | Mood
  | Offers
  | Entry;
