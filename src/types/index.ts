export interface RouteNodeType {
    children: Array<RouteNodeType>;
    name: string;
    route: string;
}
