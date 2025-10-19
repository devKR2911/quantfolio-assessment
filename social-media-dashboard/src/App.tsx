import Layout from "@core/Layout/Layout";

import Header from "@business/Header/Header";
import TotalOverview from "@business/TotalOverview/TotalOverview";
import TodaysOverview from "@business/TodaysOverview/TodaysOverview";
import MonthlyAnalysis from "@business/MonthlyAnalysis/MonthlyAnalysis";

function App() {
  return (
    <Layout>
      {/* Routing can be intodiced in this layer if there are going to be more pages */}
      <Header />
      <TotalOverview />
      <TodaysOverview />
      <MonthlyAnalysis />
    </Layout>
  );
}

export default App;
