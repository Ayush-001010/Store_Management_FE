import * as yup from 'yup';
import { IOptionInterface } from './CommonInterface';

export default interface IFormDisplayTypeConfig {
    displayType : "one-column" | "two-column";
    fields : Array<FormConfig>;
}

export  interface FormConfig {
    displayName: string;
    backendName: string;
    type : "text" | "email" | "password" | "number" | "checkbox" | "select" | "radio" | "textarea" | "date" | "image";
    placeholder?:string;
    validation?: yup.StringSchema;
    options?:Array<IOptionInterface>;
}