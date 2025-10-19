import Grid from "@core/Grid/Grid";
import TotalOverviewItem from "@business/TotalOverviewItem/TotalOverviewItem";

import { totalOverviewData } from "@/data/total-overview";

const TotalOverview = () => {
  return (
    <Grid>
      {totalOverviewData.map((item) => (
        <TotalOverviewItem key={item.platform} overviewInfo={item}></TotalOverviewItem>
      ))}
    </Grid>
  );
};

export default TotalOverview;
