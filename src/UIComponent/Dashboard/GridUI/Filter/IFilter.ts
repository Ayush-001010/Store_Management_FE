export default interface IFilter {
    filterHandler : (type : "apply" | "clear" , filterValue : Record<string, any>) => void;
}