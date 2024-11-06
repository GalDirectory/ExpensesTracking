import {Dispatch, SetStateAction} from 'react';

export type StackParamList = {
  WelcomeScreen: undefined;
  AppTabs: undefined;
  CreateEditFilterExpenseScreen:
    | {item?: DataItem; setFilter?: Dispatch<SetStateAction<DataItem>>}
    | undefined;
};

export type TabParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  CreateExpenseButton: undefined;
};

export type DataItem = {
  id: string;
  title: string;
  amount?: number;
  date?: Date;
};
