export interface ITotalOverview {
  platform: IPlatform;
  accountName: string;
  userCount: string;
  userType: string;
  dailyActivityCount: number;
  icon: string;
  latestPostOverview: {
    title: string;
    description: string;
    likes: number;
    shares: number;
    comments: number;
  };
}

export type IPlatform = "facebook" | "twitter" | "instagram" | "youtube";

export interface ITodayOverview {
  activityName: string;
  icon: string;
  totalCount: string;
  dailyActivityPercentage: number;
}
