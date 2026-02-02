export default interface IDashboardHeaderButton{
    text: string;
    clickHandler?: (name?:string) => void;  
    value: string | null | undefined;
}