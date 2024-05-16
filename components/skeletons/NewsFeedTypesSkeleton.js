import ContentLoader, { Rect } from "react-content-loader/native";

const NewsFeedTypesSkeleton = ({ loading = false }) => {
  if (!loading) {
    return null;
  }

  return (
    <ContentLoader
      speed={2}
      width="100%"
      height="300"
      viewBox="0 0 300 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {Array.from({ length: 3 }, (_, i) => i).map((_, rowIndex) =>
        Array.from({ length: 3 }, (_, i) => i).map((_, columnIndex) => (
          <Rect
            key={`${rowIndex}-${columnIndex}`}
            x={columnIndex * 100 + 10}
            y={rowIndex * 100 + 10}
            rx="5"
            ry="5"
            width="80"
            height="80"
          />
        )),
      )}
    </ContentLoader>
  );
};

export default NewsFeedTypesSkeleton;
