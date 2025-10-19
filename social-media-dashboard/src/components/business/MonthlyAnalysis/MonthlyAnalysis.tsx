import YoutubeAnalysis from "./YouTubeAnalysis";
import TwitterAnalysis from "./TwitterAnalysis";
import InstagramAnalysis from "./InstagramAnalysis";
import FacebookAnalysis from "./FacebookAnalysis";

import classes from "./MonthlyAnalysis.module.scss";
import Stack from "@core/Stack/Stack";
import Heading2 from "@core/Typography/Heading2/Heading2";

const MonthlyAnalysis = () => {
  return (
    <Stack>
      <Heading2>Analysis Report</Heading2>
      <div className={classes.analysisContainer}>
        <YoutubeAnalysis />
        <TwitterAnalysis />
        <InstagramAnalysis />
        <FacebookAnalysis />
      </div>
    </Stack>
  );
};

export default MonthlyAnalysis;
