import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

const data1 = [
  { x: 1, y: 2 },
  { x: 2, y: 5 },
  { x: 3, y: 7 },
];




// "hackerrank": 1198,
// "leetcode": 12448,
// "codechef": 3380,
// "codeforces": 80,
// "spoj": 20,
// "total": 17126,


export default function DashBoard({stats}) {

    if (!stats) {
        return <div>Loading...</div>;
      }

    console.log(stats)

    const data = [
      {
        data: [
          { value: (stats.leetcode/stats.total)*100, label: 'Leetcode' ,color:'red'},
          { value: (stats.codechef/stats.total)*100, label: 'Codechef' ,color:'yellow'},
          { value: (stats.spoj/stats.total)*100, label: 'Spoj' ,color:'blue'},
          { value: (stats.codeforces/stats.total)*100, label: 'Codeforces' ,color:'green'},
          { value: (stats.hackerrank/stats.total)*100, label: 'Hackerrank' ,color:'orange'}
        ],
        innerRadius: 50,
      outerRadius: 100,
      paddingAngle: 1,
      cornerRadius: 5,
      startAngle: 1,
      endAngle: 360,
      cx: 150,
      cy: 150,
      },
      
    ]

    // const data2 = [
    //     { data: [{ value: (stats.leetcode/stats.total)*100, label: 'Leetcode' ,color:'red'}] },
    //     { data: [{ value: (stats.codechef/stats.total)*100, label: 'Codechef' ,color:'yellow'}] },
    //     { data: [{ value: (stats.spoj/stats.total)*100, label: 'Spoj' ,color:'blue'}] },
    //     { data: [{ value: (stats.codeforces/stats.total)*100, label: 'Codeforces' ,color:'green'}] },
    //     { data: [{ value: (stats.hackerrank/stats.total)*100, label: 'Hackerrank' ,color:'orange'}] },
    //   ];
      
    return (
        
      <div>
        <PieChart colors={['red', 'yellow', 'blue', 'green', 'orange']} series= { data }   width={500} height={300} />
        {/* <LineChart series={[ { data1 } ]} width={400} height={300} /> */}
      </div>
    );
  }

//   export default function DashBoard({ stats }) {
//     if (!stats) {
//       return <div>Loading...</div>;
//     }
  
//     // Calculate the total sum of all stats
//     const totalSum = Object.values(stats).reduce((acc, curr) => acc + curr, 0);
  
//     // Scale each stat value to a total of 100
//     const scaledStats = {
//       leetcode: (stats.leetcode / totalSum) * 100,
//       codechef: (stats.codechef / totalSum) * 100,
//       spoj: (stats.spoj / totalSum) * 100,
//       codeforces: (stats.codeforces / totalSum) * 100,
//       hackerrank: (stats.hackerrank / totalSum) * 100,
//     };
  
//     console.log(scaledStats);
  
//     const data2 = [
//       { data: [{ value: scaledStats.leetcode, label: 'Leetcode', color: 'red' }] },
//       { data: [{ value: scaledStats.codechef, label: 'Codechef', color: 'yellow' }] },
//       { data: [{ value: scaledStats.spoj, label: 'Spoj', color: 'blue' }] },
//       { data: [{ value: scaledStats.codeforces, label: 'Codeforces', color: 'green' }] },
//       { data: [{ value: scaledStats.hackerrank, label: 'Hackerrank', color: 'red' }] },
//     ];
  
//     return (
//       <div>
//         <PieChart series={data2} width={200} height={300} />
//       </div>
//     );
//   }
  