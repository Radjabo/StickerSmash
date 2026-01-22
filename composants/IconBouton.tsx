import { Pressable, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { iconBtn } from "@/styles/composants/iconBouton";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
    label: string;
};

export default function IconBouton({ icon, onPress, label }: Props) {
    return (
        <Pressable style={iconBtn.iconBouton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={iconBtn.iconBoutonLabel}>{label}</Text>
        </Pressable>
    );
}