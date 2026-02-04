import AnalyticDataContext from "../../Types/AnalyticPoints";

export default interface IAnalyticPoints {
    data : Array<AnalyticDataContext>;
    analyticBarChangeHandler? : (value : string) => void;
}