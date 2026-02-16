import { GridFilterInterface } from "../../../Types/DashboardInterface";

export default interface IFilterContent {
    gridFilterConfig: Array<GridFilterInterface>;
    value: Record<string, any>;
    changeHandler : (field : string , filterValue : any) => void;
}