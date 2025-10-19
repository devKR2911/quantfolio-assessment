import Stack from "@core/Stack/Stack";
import Heading2 from "@core/Typography/Heading2/Heading2";
import DraggableComponent from "@core/Draggable/DraggableComponent/DraggableComponent";

import { todaysOverviewData } from "@/data/todays-overview";

import TodaysOverviewItem from "../TodaysOverviewItem/TodaysOverviewItem";

const TodaysOverview = () => {
  return (
    <Stack>
      <Heading2>Overview - Today</Heading2>
      <DraggableComponent identifier="todays-overview">
        {todaysOverviewData.map((item) => (
          <TodaysOverviewItem key={item.activityName + item.icon} overviewInfo={item}></TodaysOverviewItem>
        ))}
      </DraggableComponent>
    </Stack>
  );
};

export default TodaysOverview;
