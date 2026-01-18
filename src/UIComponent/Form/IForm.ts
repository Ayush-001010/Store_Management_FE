import IFormDisplayTypeConfig from "../../Types/FormConfig";

export interface IForm {
  headerText?: {
    text: string;
    isAnimationRequired?: boolean;
    boldWords?: Array<string>;
  };
  formConfig: Array<IFormDisplayTypeConfig>;
  specialTypeForm?: boolean;
  specialTypeName?: "create-store";
}
