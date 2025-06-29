import React, { memo } from "react";
import { DataTable } from "primereact/datatable";
import TypeDefaultTableProps from "./types/TypeDefaultTableProps";
import { DataTableValue } from "primereact/datatable";
import "./style/DefaultTable.css";

const DefaultTable = <T,>({
  children,
  value,
  rows = 10,
  paginator = true,
}: TypeDefaultTableProps<T>): React.ReactNode => {
  return (
    <DataTable
      tableStyle={{ minWidth: "100%" }}
      className="default-table w-full"
      value={value as Array<DataTableValue>}
      paginator={paginator}
      rows={rows}
      emptyMessage="Vazio."
    >
      {children}
    </DataTable>
  );
};

export default memo(DefaultTable);
