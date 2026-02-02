import { ColumnInterface, FormatterInterface } from "../../Types/DashboardInterface";

export default interface IDashboard {
  columnsConfig: Array<ColumnInterface>;
  data: Array<any>;
  headerOptionsArr?: Array<string>;
  formatterConfig?: Array<FormatterInterface>;
  formatterHandler? : (name: string, value: any) => void;
  headerOptionHandler? : (name: string) => void;
  headerOptionsValue? : string | null;
}
