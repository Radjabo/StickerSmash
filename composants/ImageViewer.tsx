import { imageViewer } from "@/styles/composants/imageViewer";
import { styles } from "@/styles/app/indexStyles";
import { Image } from "expo-image";
import { ImageSource, ImageSourcePropType } from "react-native";

type Props = {
    imgSource: ImageSourcePropType;
};

export default function ImageViewer({ imgSource }: Props) {
    return <Image source={imgSource} style={imageViewer.imageViewer} />
}