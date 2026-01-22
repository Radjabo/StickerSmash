import { imageViewer } from "@/styles/composants/imageViewer";
import { styles } from "@/styles/app/indexStyles";
import { Image } from "expo-image";
import { ImageSource, ImageSourcePropType } from "react-native";

type Props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
    const ImageSource = selectedImage ? { uri: selectedImage } : imgSource;
    
    return <Image source={ImageSource} style={imageViewer.imageViewer} />
} 