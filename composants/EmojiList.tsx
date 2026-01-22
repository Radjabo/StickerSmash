import { StyleSheet, FlatList, Platform, Pressable, ImageSourcePropType } from "react-native";
import { useState } from "react";
import { Image } from "expo-image";
import { emojiLis } from "@/styles/composants/emojiList"

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
};

export default function EmojiList({onSelect, onCloseModal} : Props) {
    const [emoji] = useState<ImageSourcePropType[]>([
        require("@/assets/myimages/emoji1.png"),
        require("@/assets/myimages/emoji2.png"),
        require("@/assets/myimages/emoji3.png"),
        require("@/assets/myimages/emoji4.png"),
        require("@/assets/myimages/emoji5.png"),
        require("@/assets/myimages/emoji6.png"),
    ]);

    return(
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={Platform.OS == 'web'}
            data={emoji}
            contentContainerStyle={emojiLis.listContainer}
            renderItem={({item, index }) => (
                <Pressable 
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}>
                        <Image source={item} key={index} style={emojiLis.image} />
                
                </Pressable>
            )} />
    );
}