import { View, Image, StyleSheet } from "react-native";

import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  languageText: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  repoInfo: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  repoItemCount: {
    marginBottom: 5,
  },
  nameText: {
    marginBottom: 5,
  },
});

const RepositoryLanguage = ({ language }) => {
  return (
    <View style={styles.languageContainer}>
      <Text style={styles.languageText}>{language}</Text>
    </View>
  );
};

const RepositoryInfo = ({ label, count }) => {
  return (
    <View style={styles.repoInfo}>
      <Text style={styles.repoItemCount} fontWeight="bold">
        {count}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryITem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        </View>
        <View style={styles.contentContainer}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.nameText}>
            {item.fullName}
          </Text>
          <Text>{item.description}</Text>
          <RepositoryLanguage language={item.language} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <RepositoryInfo label="Stars" count={item.stargazersCount} />
        <RepositoryInfo label="Forks" count={item.forksCount} />
        <RepositoryInfo label="Reviews" count={item.reviewCount} />
        <RepositoryInfo label="Rating" count={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryITem;
