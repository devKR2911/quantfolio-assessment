import type React from "react";

import Stack from "@core/Stack/Stack";
import Paragraph from "@core/Typography/Paragraph/Paragraph";
import Icon from "@core/Icon/Icon";

import likeIcon from "@/assets/images/like.svg";
import shareIcon from "@/assets/images/share.svg";
import commentsIcon from "@/assets/images/comment.svg";

import classes from "./Post.module.scss";

interface IPostProps {
  title: string;
  description: string;
  likes: number;
  shares: number;
  comments: number;
}

const Post: React.FC<IPostProps> = ({ title, description, likes, shares, comments }) => {
  return (
    <div className={classes.postContainer}>
      <Stack>
        <Paragraph small light>
          You latest post
        </Paragraph>
        <Paragraph bold>{title}</Paragraph>
        <Paragraph light>{description}</Paragraph>
        <div className={classes.activities}>
          <div className={classes.activity}>
            <Icon>
              <img src={likeIcon} alt="" />
            </Icon>
            <Paragraph>{likes}</Paragraph>
          </div>
          <div className={classes.activity}>
            <Icon>
              <img src={shareIcon} alt="" />
            </Icon>
            <Paragraph>{shares}</Paragraph>
          </div>
          <div className={classes.activity}>
            <Icon>
              <img src={commentsIcon} alt="" />
            </Icon>
            <Paragraph>{comments}</Paragraph>
          </div>
        </div>
      </Stack>
    </div>
  );
};
export default Post;
