import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../utils/Colors';

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary200,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  pressed: {
    opacity: 0.9,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});
