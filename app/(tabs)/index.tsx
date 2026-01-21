import ImageViewer from "@/composants/ImageViewer";
import { View } from "react-native";
import { styles } from "../../styles/app/indexStyles";
import { Button } from "@react-navigation/elements";
import Bouton from "@/composants/Bouton";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import IconBouton from "@/composants/IconBouton";
import CircleBouton from "@/composants/CircleButton";

const PlaceholderImage = require('../../assets/myimages/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const ImagePickerAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Vous n\'avez pas selectionne d\'image.');
    }
  }; 

  const onReset = () => {
    setShowAppOptions(false);
  };
  
  const onAddSticker = () => {
    alert('we will implement this later');
  };

  const onSaveImageAsync = () => {
    alert('we will implement this later');
  }

  return (
    <View
      style={styles.container}
    >
      <View 
        style={styles.imageContainer}
      >
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconBouton icon="refresh" label="Reinitialiser" onPress={onReset} />
            <CircleBouton onPress={onAddSticker} />
            <IconBouton icon="save-alt" label="Enregistrer" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Bouton label="Choisir une photo" theme="primary" onPress={ImagePickerAsync} />
          <Bouton label="Utiliser cette photo" onPress={()=> setShowAppOptions(true)} />
        </View>
      )}
    </View>
  );
}
