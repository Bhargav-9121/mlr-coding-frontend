import { PieChart } from '@mui/x-charts/PieChart';

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
        cx: 200,
        cy: 200,
      },
      
    ]

      
    return (
        
      <div>
        <PieChart colors={['red', 'yellow', 'blue', 'green', 'orange']} series= { data } width={200} height={200} />
      </div>
    );
  }
