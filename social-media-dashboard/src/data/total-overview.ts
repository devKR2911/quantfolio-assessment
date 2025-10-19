import type { ITotalOverview } from "@/interfaces/interface";
import iconFacebook from "@/assets/images/icon-facebook.svg";
import iconTwitter from "@/assets/images/icon-twitter.svg";
import iconInstagram from "@/assets/images/icon-instagram.svg";
import iconYoutube from "@/assets/images/icon-youtube.svg";

export const totalOverviewData: ITotalOverview[] = [
  {
    platform: "facebook",
    accountName: "@nathanf",
    userCount: "1987",
    userType: "FOLLOWERS",
    dailyActivityCount: 12,
    icon: iconFacebook,
    latestPostOverview: {
      title: "Morning Code Vibes ☕💻",
      description: "Starting the day with coffee!",
      likes: 52,
      shares: 36,
      comments: 123,
    },
  },
  {
    platform: "twitter",
    userCount: "1044",
    userType: "FOLLOWERS",
    accountName: "@nathanf",
    dailyActivityCount: 99,
    icon: iconTwitter,
    latestPostOverview: {
      title: "Just Launched 🚀",
      description: "Excited to share my project",
      likes: 56,
      shares: 45,
      comments: 12,
    },
  },

  {
    platform: "instagram",
    userCount: "11k",
    userType: "FOLLOWERS",
    accountName: "@realnathanf",
    dailyActivityCount: 1099,
    icon: iconInstagram,
    latestPostOverview: {
      title: "Bug Fixed ✅",
      description: "After hours of debugging",
      likes: 74,
      shares: 63,
      comments: 412,
    },
  },
  {
    platform: "youtube",
    userCount: "8239",
    userType: "SUBSCRIBERS",
    accountName: "Nathan F.",
    dailyActivityCount: -144,
    icon: iconYoutube,
    latestPostOverview: {
      title: "Weekend Reading 📚",
      description: "Catching up on Clean Code",
      likes: 85,
      shares: 66,
      comments: 777,
    },
  },
];
