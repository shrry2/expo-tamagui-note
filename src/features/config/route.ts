export const Route = {
  List: 'List',
  Detail: 'Detail',
  Create: 'Create',
} as const;

export type Route = (typeof Route)[keyof typeof Route];

export type RouteStackParamList = {
  [Route.List]: undefined;
  [Route.Detail]: {
    id: string;
  };
  [Route.Create]: undefined;
};
