export interface ColumnInterface {
    field : string;
    headerName : string;
    filter?: boolean;
}

export interface GridInterface {
    field : string;
    headerName : string;
    icon : string;
}

export interface GridFilterInterface {
    field : string;
    headerName : string;
    type : "text" | "boolean" | "time";
}

export interface FormatterInterface {
    name : "FavoriteFormatter" | "profitFormatter";
    position : "start" | "end";
}

export interface HeaderOptionsInterface {
    text:string;
    backgroundColor?:string;
    color?:string;
}