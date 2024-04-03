import { DataGrid ,  gridClasses  } from "@mui/x-data-grid";
import { alpha, styled } from '@mui/material/styles';

const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

const columns = [
  { field: "Rank", headerName: "Rank", width: 130 ,headerClassName: 'super-app-theme--header',
  headerAlign: 'center', cellClassName : 'super-app-theme--cell'},
  { field: "Roll_Number", headerName: "Roll No", width: 200, headerClassName: 'super-app-theme--header', headerAlign: 'center' ,cellClassName : 'super-app-theme--cell'},
  { field: "Name", headerName: "Name", width: 300, headerClassName: 'super-app-theme--header', headerAlign: 'center' , cellClassName: 'super-app-theme--name'},
  { field: "hackerrank", headerName: "Hackerrank", type: "number", width: 130, headerClassName: 'super-app-theme--header', headerAlign: 'center' ,cellClassName : 'super-app-theme--cell'},
  { field: "leetcode", headerName: "LeetCode", type: "number", width: 130, headerClassName: 'super-app-theme--header', headerAlign: 'center' ,cellClassName : 'super-app-theme--cell'},
  { field: "codechef", headerName: "Codechef", type: "number", width: 130, headerClassName: 'super-app-theme--header', headerAlign: 'center' ,cellClassName : 'super-app-theme--cell'},
  { field: "codeforces", headerName: "Codeforces", type: "number", width: 130, headerClassName: 'super-app-theme--header', headerAlign: 'center' ,cellClassName : 'super-app-theme--cell'},
  { field: "spoj", headerName: "SPOJ", type: "number", width: 130, headerClassName: 'super-app-theme--header', headerAlign: 'center' ,cellClassName : 'super-app-theme--cell'},
  {
    field: "total",
    headerName: "Total Score",
    type: "number",
    width: 130,
    // Enable sorting by total score in descending order (highest to lowest)
    sortModel: [{ field: "total", sort: "desc" }], // Initial sort configuration
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    cellClassName : 'super-app-theme--cell'
  },
  // { field: "rank", headerName: "Rank", width: 100 }, // Optional
];



export default function DataTable({ data }) {
  data = data.map((row, index) => ({ ...row, Rank: index + 1 }));

  return (
    <div>
      <div style={ {paddingTop :'100px', display:"flex", justifyContent:'center', fontSize:'20px'} }>Batch 2026 - Leaderboard</div>
      <StripedDataGrid rows={data} columns={columns} 
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
        sx={{
            m: 2 ,
          '& .super-app-theme--header': {
            fontWeight: "bold",
            fontSize: "16px",
            borderRight: "1px solid rgba(224, 224, 224, 1)"
          },
          '& .super-app-theme--cell': {
            display: "flex",
            fontWeight: "bold",
            fontFamily: "roboto",
            justifyContent: "center",
            borderRight: "1px solid rgba(224, 224, 224, 1)"
          },
          '& .super-app-theme--name': {
            fontFamily: "roboto",
            fontWeight: "bold",
            borderRight: "1px solid rgba(224, 224, 224, 1)"
          },
          '& .super-app-theme--even': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // Grey background for even rows
          }
        }}
        
  />
    </div>
  );
}
