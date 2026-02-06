import { ColumnInterface,FormatterInterface,GridFilterInterface,GridInterface, HeaderOptionsInterface} from "../../Types/DashboardInterface";

export default interface IDashboard {
  columnsConfig: Array<ColumnInterface>;
  data: Array<any>;
  headerOptionsArr?: Array<HeaderOptionsInterface>;
  formatterConfig?: Array<FormatterInterface>;
  formatterHandler?: (name: string, value: any) => void;
  headerOptionHandler?: (name: string) => void;
  headerOptionsValue?: string | null;
  gridType?: "store";
  gridConfig?: Array<GridInterface>;
  gridFilterConfig?: Array<GridFilterInterface>;
}
