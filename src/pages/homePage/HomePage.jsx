import './homePage.scss'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import SmallWidgit from '../../components/smallWidgit/SmallWidgit'
import LargeWidgit from '../../components/largeWidgit/LargeWidgit'
import { userData } from '../../data'

export default function HomePage() {
  return (
    <div className="homePage">
        <Featured />
        <Chart data={userData} title="User Analitical" grid dataKey="Active"/>
        <div className="widgit">
          <SmallWidgit />
          <LargeWidgit />
        </div>
    </div>
  )
}
