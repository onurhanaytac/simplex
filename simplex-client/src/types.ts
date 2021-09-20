/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
export interface Action {
  type: string;
}

export interface ResponseState {
  response: any;
  loading: boolean;
  loaded: boolean;
}
