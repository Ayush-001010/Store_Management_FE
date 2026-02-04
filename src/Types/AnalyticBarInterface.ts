import { IOptionInterface } from "./CommonInterface";

export interface AnalyticBarOptionInterface {
  label: string;
  options: Array<IOptionInterface>;
  description: string;
  backendKey: string;
}

export interface AnalyticDataInterface {
  xAxisName: string;
  value: number;
}
