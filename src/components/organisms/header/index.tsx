import Icons from "@/components/atoms/icons";
import colors from "@/theme/colors";
import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Hi, John Dow</Text>
      <Icons.Add color={colors.iconBlack} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 18,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    lineHeight: 23,
    color: colors.black,
    fontFamily: 'Walsheim-Bold'
  },
});
