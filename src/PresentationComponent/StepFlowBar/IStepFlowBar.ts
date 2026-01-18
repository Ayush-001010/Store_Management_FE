import StepFlowInterface from "../../Types/StepFlowInterface";

export default interface IStepFlowBar {
  config: StepFlowInterface;
  activeStepIndex: number;
  index: number;
  isLast: boolean;
}
