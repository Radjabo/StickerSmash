
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { emojiPick } from "@/styles/composants/emojiPicker"
type Props = PropsWithChildren<{
    isVisible: boolean,
    onClose: () => void;
}>;

export default function EmojiPecker ({ isVisible, onClose, children } : Props){
    return(
        <View>
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={emojiPick.modalContent}>
                <View style={emojiPick.titleContainer}>
                    <Text style={emojiPick.title}>Choisir un sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
        </View>
    );
}