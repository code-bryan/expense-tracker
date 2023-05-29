import { StyleSheet, Text, View } from "react-native";
import { translate } from "@/translate";
import colors from "@/theme/colors";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>
          {translate('base.hello-world')}
        </Text>
        <Text style={styles.subtitle}>
          {translate('base.description')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Walsheim-Bold"
  },
  subtitle: {
    fontSize: 36,
    color: colors.secondary,
    fontFamily: "Walsheim-Regular"
  },
});
