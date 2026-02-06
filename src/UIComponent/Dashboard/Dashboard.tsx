import React, { createContext, ReactNode } from "react";
import IDashboard from "./IDashboard";
import TableUI from "./TableUI/TableUI";
import { ColumnInterface, FormatterInterface, GridFilterInterface, GridInterface, HeaderOptionsInterface } from "../../Types/DashboardInterface";
import GridUI from "./GridUI/GridUI";

interface IDashboardContext {
    columnsConfig : Array<ColumnInterface>;
    data : Array<any>;
    headerOptionsArr?: Array<HeaderOptionsInterface>;
    formatterConfig? : Array<FormatterInterface>;
    formatterHandler? : (name: string, value: any) => void;
    headerOptionHandler? : (name: string) => void;
    headerOptionsValue? : string | null;
    gridView : "table" | "grid";
    changeViewHandler : (viewType: "table" | "grid") => void;
    gridConfig?: Array<GridInterface>;
    gridType ? : "store";
    gridFilterConfig?: Array<GridFilterInterface>;
}

const DashboardContext = createContext<IDashboardContext | undefined>(undefined);

export const useGetDashboardContext = () => {
    const context = React.useContext(DashboardContext);
    if (!context) {
        throw new Error("useGetDashboardContext must be used within a DashboardProvider");
    }
    return context as IDashboardContext;
}

interface DashboardComponentProps extends React.FC<IDashboard & { children: ReactNode }> {
    HeaderOptions : React.FC;
    ToggleUI : React.FC;
}


const Dashboard : DashboardComponentProps = ({children , columnsConfig , data , headerOptionsArr , formatterConfig , formatterHandler , headerOptionHandler , headerOptionsValue , gridConfig , gridType , gridFilterConfig}) => {
    const [gridView, setGridView] = React.useState<"table" | "grid">("table");
    
    const changeViewHandler = (viewType: "table" | "grid") => {
        setGridView(viewType);
    };
    return (
        <DashboardContext.Provider value={{ columnsConfig , data , headerOptionsArr , formatterConfig , formatterHandler , headerOptionHandler , headerOptionsValue , gridView , changeViewHandler , gridConfig , gridType , gridFilterConfig}}>
        <div>
            {children}
            <div>
                {gridView === "table" && <TableUI/>}
                {gridView === "grid" && <GridUI/>}
            </div>
        </div>
        </DashboardContext.Provider>
    )
};

Dashboard.HeaderOptions = React.lazy(() => import("./HeaderOptions/HeaderOptions"));
Dashboard.ToggleUI = React.lazy(() => import("./ToggleUI/ToggleUI"));

export default Dashboard;