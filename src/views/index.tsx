import Header from "@/components/organisms/header";
import MonthSelector from "@/components/organisms/month-selector";
import colors from "@/theme/colors";
import { StyleSheet, View, SafeAreaView } from "react-native";

export default function Page() {
  return (
    <>
      <SafeAreaView style={styles.safearea} />
      <View style={styles.container}>
        <Header />
        <MonthSelector />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    gap: 14,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
});
