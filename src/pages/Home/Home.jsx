import React, { useState } from "react";
import DataTable from "./DataTable";
import { TextField, Toolbar, InputAdornment } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";

import "./home.css";

function Home() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const filtered = rows.filter((row) => {
      return Object.keys(row).some((field) => {
        const value = row[field];
        return (
          value !== null &&
          value !== undefined &&
          value.toString().toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    });
    setFilteredRows(filtered);
  };

  const handleSearch = (event) => {
    requestSearch(event.target.value);
  };

  return (
    <section className="home">
      <div className="upper-bar">
        <div>
          {" "}
          <ul className="bar-links">
            <li>
              <button href="#" className="active">
                LINK
              </button>
            </li>
          </ul>
        </div>
        <div className="searchbar">
          <Toolbar>
            <TextField
              variant="outlined"
              placeholder="Search…"
              value={searchText}
              onChange={handleSearch}
              style={{ marginBottom: "10px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoSearchOutline />
                  </InputAdornment>
                ),
              }}
            />
          </Toolbar>
        </div>
      </div>
      <div className="table">
        <DataTable filteredRows={filteredRows} columns={columns} />
      </div>
    </section>
  );
}
export default Home;
