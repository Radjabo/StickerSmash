import ImageViewer from "@/composants/ImageViewer";
import { ImageSourcePropType, View, Platform } from "react-native";
import { styles } from "../../styles/app/indexStyles";
import { Button } from "@react-navigation/elements";
import Bouton from "@/composants/Bouton";
import * as ImagePicker from 'expo-image-picker';
import React, {useEffect, useState, useRef } from "react";
import IconBouton from "@/composants/IconBouton";
import CircleBouton from "@/composants/CircleButton";
import EmojiPecker from "@/composants/EmojiPicker";
import EmojiList from "@/composants/EmojiList";
import EmojiSticker from "@/composants/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image-more';


const PlaceholderImage = require('../../assets/myimages/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, []);

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
      setIsModalVisible(true);
    };
  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
        try{
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Image Enregistree dans la galerie!');
        }
      } catch (e) {
        console.log(e);
      }
    }else {
      try{
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href= dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView
      style={styles.container}
    >
      <View 
        style={styles.imageContainer}
      >
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
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
      <EmojiPecker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPecker>
    </GestureHandlerRootView>
  );
}
