import ContentLoader, { Rect } from "react-content-loader/native";

const CountrySkeleton = ({ loading = false }) => {
  if (!loading) {
    return null;
  }

  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={259}
      viewBox="0 0 468 259"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <Rect x="68" y="0" rx="3" ry="3" width="398" height="60" />
      <Rect x="0" y="0" rx="3" ry="3" width="53" height="60" />
      <Rect x="68" y="67" rx="3" ry="3" width="398" height="60" />
      <Rect x="0" y="67" rx="3" ry="3" width="53" height="60" />
      <Rect x="68" y="132" rx="3" ry="3" width="398" height="60" />
      <Rect x="0" y="132" rx="3" ry="3" width="53" height="60" />
      <Rect x="68" y="199" rx="3" ry="3" width="398" height="60" />
      <Rect x="0" y="199" rx="3" ry="3" width="53" height="60" />
    </ContentLoader>
  );
};

export default CountrySkeleton;
