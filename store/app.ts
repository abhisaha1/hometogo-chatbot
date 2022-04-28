import create from 'zustand';
import { Options, Steps, Entry } from '../types';

interface Store {
  stepName: Steps;
  stepData: Options;
}

const initialState: Store = {
  stepName: Steps.Entry,
  stepData: {
    isflexible: true,
    question: 'How do you want ?',
    __typename: 'entry',
  },
};

const store = create(() => ({ ...initialState }));

export const setStep = (stepName: Steps) => {
  store.setState({ stepName });
};

export default store;
