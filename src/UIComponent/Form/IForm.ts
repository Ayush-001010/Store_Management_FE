import { IOptionInterface } from "../../Types/CommonInterface";
import IFormDisplayTypeConfig from "../../Types/FormConfig";

export interface IForm {
  headerText?: {
    text: string;
    isAnimationRequired?: boolean;
    boldWords?: Array<string>;
  };
  formConfig: Array<IFormDisplayTypeConfig>;
  isSpecialTypeForm?: boolean;
  specialTypeName?: "create-store";
  options?: Record<string,Array<IOptionInterface>>;
}
