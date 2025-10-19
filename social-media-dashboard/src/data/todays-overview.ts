import type { ITodayOverview } from "@/interfaces/interface";
import iconFacebook from "@/assets/images/icon-facebook.svg";
import iconTwitter from "@/assets/images/icon-twitter.svg";
import iconInstagram from "@/assets/images/icon-instagram.svg";
import iconYoutube from "@/assets/images/icon-youtube.svg";

export const todaysOverviewData: ITodayOverview[] = [
  {
    activityName: "Page Views",
    icon: iconFacebook,
    totalCount: "87",
    dailyActivityPercentage: 3,
  },
  {
    activityName: "Likes",
    icon: iconFacebook,
    totalCount: "52",
    dailyActivityPercentage: -2,
  },
  {
    activityName: "Likes",
    icon: iconInstagram,
    totalCount: "5462",
    dailyActivityPercentage: 2257,
  },
  {
    activityName: "Profile Views",
    icon: iconInstagram,
    totalCount: "52k",
    dailyActivityPercentage: 1375,
  },
  {
    activityName: "Retweets",
    icon: iconTwitter,
    totalCount: "117",
    dailyActivityPercentage: 303,
  },
  {
    activityName: "Likes",
    icon: iconTwitter,
    totalCount: "507",
    dailyActivityPercentage: 553,
  },
  {
    activityName: "Likes",
    icon: iconYoutube,
    totalCount: "107",
    dailyActivityPercentage: -19,
  },
  {
    activityName: "Total Views",
    icon: iconYoutube,
    totalCount: "1407",
    dailyActivityPercentage: -12,
  },
];
