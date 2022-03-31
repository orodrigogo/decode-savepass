export type FormNavigationProps = {
  id?: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Form: FormNavigationProps;
    }
  }
}