import { AnalyticBarOptionInterface, AnalyticDataInterface } from "../../Types/AnalyticBarInterface";

export default interface IAnalyticBar {
  options: Array<AnalyticBarOptionInterface>;
  analyticValue : Record<string, string>;
  analyticData:Array<AnalyticDataInterface>;
  chartType:"line" |"bar";
  applyHandler : (val : any) => Promise<void>;
  isSpecificFieldSelected?: boolean;
  specificFieldName?: string;
  specificFieldSelectionHandler?: (value : string) => void;
}
