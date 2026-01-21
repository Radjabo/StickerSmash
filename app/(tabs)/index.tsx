import ImageViewer from "@/composants/ImageViewer";
import { View } from "react-native";
import { styles } from "../../styles/app/indexStyles";
import { Button } from "@react-navigation/elements";
import Bouton from "@/composants/Bouton";

const PlaceholderImage = require('../../assets/myimages/background-image.png');

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View 
        style={styles.imageContainer}
      >
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Bouton label="Choisir une photo" theme="primary" />
        <Bouton label="Utiliser cette photo" />
      </View>
    </View>
  );
}
