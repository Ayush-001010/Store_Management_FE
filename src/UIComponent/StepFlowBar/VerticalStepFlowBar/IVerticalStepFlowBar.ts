import StepFlowInterface from "../../../Types/StepFlowInterface";

export default interface IVerticalStepFlowBar {
  flowBarConfig: Array<StepFlowInterface>;
  activeStep: number;
}
