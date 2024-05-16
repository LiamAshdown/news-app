import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";

const PostListSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={200}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <Rect x="10" y="10" rx="3" ry="3" width="70" height="10" />
    <Rect x="10" y="30" rx="3" ry="3" width="150" height="10" />
    <Rect x="10" y="60" rx="3" ry="3" width="380" height="10" />
    <Rect x="10" y="80" rx="3" ry="3" width="380" height="10" />
    <Rect x="10" y="100" rx="3" ry="3" width="150" height="10" />
    <Rect x="10" y="140" rx="3" ry="3" width="24" height="24" />
    <Rect x="40" y="140" rx="3" ry="3" width="24" height="24" />
    <Rect x="70" y="140" rx="3" ry="3" width="24" height="24" />
    <Rect x="100" y="140" rx="3" ry="3" width="24" height="24" />
    <Rect x="150" y="130" rx="3" ry="3" width="200" height="50" />
  </ContentLoader>
);

export default PostListSkeleton;
