import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "Rank", headerName: "Rank", width: 120 },
  { field: "Roll_Number", headerName: "Roll No", width: 120 },
  { field: "Name", headerName: "Name", width: 200 },
  { field: "hackerrank", headerName: "Hackerrank", type: "number", width: 130 },
  { field: "leetcode", headerName: "LeetCode", type: "number", width: 120 },
  { field: "codechef", headerName: "Codechef", type: "number", width: 120 },
  { field: "codeforces", headerName: "Codeforces", type: "number", width: 120 },
  { field: "spoj", headerName: "SPOJ", type: "number", width: 120 },
  {
    field: "total",
    headerName: "Total Score",
    type: "number",
    width: 130,
    // Enable sorting by total score in descending order (highest to lowest)
    sortModel: [{ field: "total", sort: "desc" }], // Initial sort configuration
  },
  // { field: "rank", headerName: "Rank", width: 100 }, // Optional
];

export default function DataTable({ data }) {
  data = data.map((row, index) => ({ ...row, Rank: index + 1 }));
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  );
}
