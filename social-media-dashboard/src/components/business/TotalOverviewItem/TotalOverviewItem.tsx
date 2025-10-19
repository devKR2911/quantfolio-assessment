import React from "react";

import Heading2 from "@core/Typography/Heading2/Heading2";
import ChangeIndicator from "@core/Typography/ChangeIndicator/ChangeIndicator";
import Paragraph from "@core/Typography/Paragraph/Paragraph";
import Stack from "@core/Stack/Stack";
import Flipper from "@core/Flipper/Flipper";
import Card from "@core/Card/Card";
import Post from "@core/Post/Post";
import Icon from "@core/Icon/Icon";

import type { ITotalOverview } from "@/interfaces/interface";

import classes from "./TotalOverviewItem.module.scss";

interface ITotalOverviewItemProps {
  overviewInfo: ITotalOverview;
}

const TotalOverviewItem: React.FC<ITotalOverviewItemProps> = ({ overviewInfo }) => {
  const { icon, accountName, userCount, userType, dailyActivityCount, latestPostOverview, platform } = overviewInfo;

  const front = (
    <Card type={platform} isClickable={false}>
      <Stack>
        <div className={classes.header}>
          {icon ? (
            <Icon>
              <img src={icon} alt={platform} />
            </Icon>
          ) : null}
          <Paragraph small bold>
            {accountName ?? null}
          </Paragraph>
        </div>
        <Stack gap="flush">
          {userCount && <Heading2 large>{userCount}</Heading2>}
          {userType && (
            <div>
              <Paragraph light>{userType}</Paragraph>
            </div>
          )}
        </Stack>
        {dailyActivityCount && (
          <ChangeIndicator isIncrement={dailyActivityCount >= 0}>{Math.abs(dailyActivityCount)} Today</ChangeIndicator>
        )}
      </Stack>
    </Card>
  );

  const back = (
    <Card type={platform} isClickable={false}>
      <Post
        title={latestPostOverview.title}
        description={latestPostOverview.description}
        likes={latestPostOverview.likes}
        shares={latestPostOverview.shares}
        comments={latestPostOverview.comments}
      ></Post>
    </Card>
  );

  return <Flipper direction="horizontal" front={front} back={back} />;
};

export default TotalOverviewItem;
