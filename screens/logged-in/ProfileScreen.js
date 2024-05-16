import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import api from "../../api";
import UserProfile from "../../components/UserProfile";
import FloatingButton from "../../components/form/FloatingButton";
import PostListSkeleton from "../../components/skeletons/PostListSkeleton";
import StoriesList from "../../components/stories/StoriesList";
import { THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";
import { selectToken, selectUser } from "../../store/auth/reducer";

const ProfileScreen = ({ navigation }) => {
  const onNewStory = () => {
    navigation.navigate("CreatePost");
  };

  const token = useSelector(selectToken);
  const currentUser = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      api.setToken(token);
      const response = await api.user.posts(currentUser.id);
      setPosts(response.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
      return () => {}; // optional cleanup function
    }, []),
  );

  console.log(posts);

  return (
    <>
      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <UserProfile user={currentUser} isOwnProfile />
        <View style={{ marginTop: PADDING[16] }}>
          {loading ? (
            <>
              <PostListSkeleton />
              <PostListSkeleton />
              <PostListSkeleton />
              <PostListSkeleton />
            </>
          ) : (
            <StoriesList posts={posts} />
          )}
        </View>
      </ScrollView>
      <FloatingButton onPressHandler={onNewStory} />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    padding: CONTAINER_PADDING,
  },
  background: {
    backgroundColor: THEME_COLORS.white,
  },
});

export default ProfileScreen;
