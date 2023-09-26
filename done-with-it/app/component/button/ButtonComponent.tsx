import { StyleSheet, Pressable, Text } from 'react-native';

type ButtonProps = {
  onPress?: any;
  title: string;
  style?: {};
};

export default function Button(props: ButtonProps) {
  const { onPress, title = 'Save', style } = props;

  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

