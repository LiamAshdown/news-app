import ContentLoader, { Rect, Circle } from "react-content-loader/native";

const PublisherSkeleton = ({ loading = false }) => {
  if (!loading) {
    return null;
  }

  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={270}
      viewBox="0 0 468 270"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <Circle cx="30" cy="30" r="30" />
      <Rect x="73" y="9" rx="0" ry="0" width="248" height="40" />
      <Rect x="333" y="9" rx="0" ry="0" width="69" height="40" />
      <Circle cx="30" cy="98" r="30" />
      <Rect x="73" y="77" rx="0" ry="0" width="248" height="40" />
      <Rect x="333" y="77" rx="0" ry="0" width="69" height="40" />
      <Circle cx="30" cy="167" r="30" />
      <Rect x="73" y="146" rx="0" ry="0" width="248" height="40" />
      <Rect x="333" y="146" rx="0" ry="0" width="69" height="40" />
      <Circle cx="30" cy="238" r="30" />
      <Rect x="73" y="217" rx="0" ry="0" width="248" height="40" />
      <Rect x="333" y="217" rx="0" ry="0" width="69" height="40" />
    </ContentLoader>
  );
};

export default PublisherSkeleton;
