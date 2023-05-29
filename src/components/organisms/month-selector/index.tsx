import MonthSelectorItem from "@/components/molecules/month-selector-item";
import colors from "@/theme/colors";
import { useCallback } from "react";
import { View, StyleSheet, FlatList, ListRenderItemInfo } from "react-native";

const data = [
  {
    month: 'Jun',
    year: 2023,
  },
  {
    month: 'May',
    year: 2023,
  },
  {
    month: 'Apr',
    year: 2023,
  },
  {
    month: 'Mar',
    year: 2023,
  },
  {
    month: 'Feb',
    year: 2023,
  },
  {
    month: 'Jan',
    year: 2023,
  },
];

interface Props {
  
}

export default function MonthSelector(props: Props) {

  const handleRenderItem = useCallback(
    ({ item }: ListRenderItemInfo<any>) => <MonthSelectorItem {...item} />, 
    []
  );

  const handleItemSeparator = useCallback(
    () => <View style={styles.separator} />,
    []
  );

  const handleKeyExtractor = useCallback(
    (item, index) => `month-selection-item-${index}`, 
    []
  );

  return (
    <FlatList
      inverted
      horizontal
      data={data}
      style={styles.container}
      renderItem={handleRenderItem}
      keyExtractor={handleKeyExtractor}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={handleItemSeparator}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 82,
    maxHeight: 82,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },
  content: {
    paddingEnd: 20,
    alignItems: 'center'
  },
  separator: {
    paddingHorizontal: 4,
  }
});
