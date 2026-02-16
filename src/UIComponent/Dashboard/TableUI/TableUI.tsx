import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community"; // Correct import
import "ag-grid-community/styles/ag-grid.css"; // Core grid styles
import "ag-grid-community/styles/ag-theme-alpine.css"; // Alpine theme
import { useGetDashboardContext } from "../Dashboard";
import { FormatterInterface } from "../../../Types/DashboardInterface";
import { Progress, Tooltip } from "antd";
ModuleRegistry.registerModules([AllCommunityModule]);

const TableUI: React.FC = () => {
  const { columnsConfig, data, formatterConfig, formatterHandler } =
    useGetDashboardContext();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns((prev) => {
      let cols = columnsConfig as any;
      formatterConfig?.forEach((formatter: FormatterInterface) => {
        switch (formatter.name) {
          case "FavoriteFormatter": {
            cols = [
              {
                name: "Favorite",
                field: "favorite",
                cellRenderer: (params: any) => {
                  return (
                    <div
                      onClick={() => {
                        if (formatterHandler) {
                          formatterHandler(formatter.name, params.data);
                          params.data.isFavorite = params.data.isFavorite
                            ? false
                            : true;
                          params.api.refreshCells({
                            rowNodes: [params.node],
                            force: true,
                          });
                        }
                      }}
                      className="flex justify-center items-center"
                    >
                      <p className="m-0">
                        <span className="text-[#dbb42c] text-lg">
                          {" "}
                          {!params.data.isFavorite ? "☆" : "★"}
                        </span>
                      </p>
                    </div>
                  );
                },
                width: 100,
              },
              ...cols,
            ];
            break;
          }
          case "profitFormatter": {
            cols = [
              ...cols,
              {
                name: "Profit",
                field: "profit",
                cellRenderer: (params: any) => {
                  const { revenu, profit } = params.data;
                  const percent =
                    revenu > 0 ? Math.round((profit / revenu) * 100) : 0;
                  return (
                    <div>
                      <Tooltip
                        title={`Revenue: $${revenu.toLocaleString()} | Profit: $${profit.toLocaleString()}`}
                      >
                        <Progress
                          percent={revenu} // Displays the main revenue progress
                          success={{ percent: profit }} // The success zone for profit
                          status="active" // Active progress animation
                        />
                      </Tooltip>
                    </div>
                  );
                },
              },
            ];
            break;
          }
        }
      });
      return cols;
    });
  }, [columnsConfig, formatterConfig, formatterHandler]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        gridOptions={{ theme: "legacy" }}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[5, 10, 20]}
      />
    </div>
  );
};

export default TableUI;
