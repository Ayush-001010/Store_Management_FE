import React, { createContext, ReactNode } from "react";
import IDashboard from "./IDashboard";
import TableUI from "./TableUI/TableUI";
import { ColumnInterface, FormatterInterface } from "../../Types/DashboardInterface";

interface IDashboardContext {
    columnsConfig : Array<ColumnInterface>;
    data : Array<any>;
    headerOptionsArr?: Array<string>;
    formatterConfig? : Array<FormatterInterface>;
    formatterHandler? : (name: string, value: any) => void;
    headerOptionHandler? : (name: string) => void;
    headerOptionsValue? : string | null;
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
    TableUI: React.FC;
    HeaderOptions : React.FC;
}


const Dashboard : DashboardComponentProps = ({children , columnsConfig , data , headerOptionsArr , formatterConfig , formatterHandler , headerOptionHandler , headerOptionsValue}) => {
    return (
        <DashboardContext.Provider value={{ columnsConfig , data , headerOptionsArr , formatterConfig , formatterHandler , headerOptionHandler , headerOptionsValue}}>
        <div>
            {children}
        </div>
        </DashboardContext.Provider>
    )
};

Dashboard.TableUI = TableUI;
Dashboard.HeaderOptions = React.lazy(() => import("./HeaderOptions/HeaderOptions"));

export default Dashboard;