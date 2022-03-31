import { Text, TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

type Props = TextInputProps & {
  label: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput style={styles.input} {...rest} />
    </View>
  );
}