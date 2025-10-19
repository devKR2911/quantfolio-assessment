import Card from "@core/Card/Card";
import Heading3 from "@core/Typography/Heading3/Heading3";
import Paragraph from "@core/Typography/Paragraph/Paragraph";
import ChangeIndicator from "@core/Typography/ChangeIndicator/ChangeIndicator";
import Stack from "@core/Stack/Stack";
import Icon from "@core/Icon/Icon";

import type { ITodayOverview } from "@/interfaces/interface";

import classes from "./TodaysOverviewItem.module.scss";
interface ITodaysOverviewItemProps {
  overviewInfo: ITodayOverview;
}

const TodaysOverviewItem: React.FC<ITodaysOverviewItemProps> = ({ overviewInfo }) => {
  const { dailyActivityPercentage, activityName, icon, totalCount } = overviewInfo;
  return (
    <Card isClickable={false}>
      <Stack>
        <div className={classes.overviewRow}>
          <Paragraph bold>{activityName}</Paragraph>
          {icon ? (
            <Icon>
              <img src={icon} alt="icon" />{" "}
            </Icon>
          ) : null}
        </div>
        <div className={classes.overviewRow}>
          <Heading3>{totalCount}</Heading3>
          <ChangeIndicator isIncrement={dailyActivityPercentage >= 0}>
            {Math.abs(dailyActivityPercentage)} %
          </ChangeIndicator>
        </div>
      </Stack>
    </Card>
  );
};

export default TodaysOverviewItem;
