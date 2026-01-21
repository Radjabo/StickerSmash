import { Text, View } from "react-native";
import { styles } from "../../styles/app/indexStyles";

export default function Apropos() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Écran à propos</Text>
    </View>
  );
}