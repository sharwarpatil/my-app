import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ filteredRows, columns }) => {
  return (
    <Box sx={{ width: "100%", borderRadius: "20px" }}>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
