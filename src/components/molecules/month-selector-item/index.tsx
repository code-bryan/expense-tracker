import colors from "@/theme/colors";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  month: string;
  year: number;
  onPress?: VoidFunction;
}

export default function MonthSelectorItem({ month, year, onPress }: Props) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={.8}
      style={styles.container}
    >
      <Text style={styles.year}>{year}</Text>

      <View style={styles.monthContainer}>
        <Text style={styles.monthTitle}>{month}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 46,
    gap: 12,
    alignItems: 'center',
  },
  year: {
    fontSize: 10,
    color: colors.blackDim,
    fontFamily: 'Walsheim-Regular',
  },
  monthContainer: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(28, 32, 46, 0.08)',
  },
  monthTitle: {
    color: '#1C202E',
  }
});