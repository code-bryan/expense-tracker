import TrackCard from "@/components/molecules/track-card";
import Header from "@/components/organisms/header";
import MonthSelector from "@/components/organisms/month-selector";
import colors from "@/theme/colors";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

export default function Page() {
  return (
    <>
      <SafeAreaView style={styles.safearea} />
      <ScrollView 
        style={styles.container}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.contentContainer}
      >
        <Header />
        <MonthSelector />

        <View style={styles.trackerContainer}>
          <TrackCard  />
          <TrackCard type="expense" />
        </View>

        <View style={styles.analiticsContainer}>
          
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
    gap: 14,
  },
  trackerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  analiticsContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 282,
  }
});
