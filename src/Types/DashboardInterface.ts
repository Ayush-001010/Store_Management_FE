export interface ColumnInterface {
    field : string;
    headerName : string;
    filter?: boolean;
}

export interface FormatterInterface {
    name : "FavoriteFormatter" | "profitFormatter";
    position : "start" | "end";
}