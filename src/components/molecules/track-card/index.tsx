import Icons from "@/components/atoms/icons";
import colors from "@/theme/colors";
import { translate } from "@/translate";
import { useCallback, useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

type Type = 'expense' | 'saving';

interface Props {
  type?: Type,
}

export default function TrackCard({ type = 'saving' }: Props) {
  const Icon = useCallback(
    () => type === 'expense' ? <Icons.Expense /> : <Icons.Saving />,
    [type]
  );

  const subtitle = useMemo(
    () => translate(type === 'expense' ? 'base.expense' : 'base.saving'),
    [type]
  );

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>

      <View style={styles.info}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.title}>$6,593.75</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 38,
    padding: 25,
    borderRadius: 12,
    paddingRight: 30,
    backgroundColor: colors.white,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.iconBackground,
  },
  info: {
    gap: 10,
  },
  title: {
    fontFamily: 'Walsheim-Bold',
    fontSize: 21,
    color: colors.black,  
  },
  subtitle: {
    fontFamily: 'Walsheim-Regular',
    fontSize: 12,
    color: colors.black,
    opacity: .5,
  }
});