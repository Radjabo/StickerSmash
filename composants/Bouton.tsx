import { boutonViewer } from "@/styles/composants/boutonViewer";
import { Pressable, View, Text } from "react-native";

type Props = {
    label: string;
};

export default function Bouton({ label }: Props) {
    return (
        <View style={boutonViewer.boutonContainer}>
            <Pressable style={boutonViewer.bouton} onPress={() => alert('Vous avez presse un bouton.')}>
                <Text style={boutonViewer.boutonLabel}>{label}</Text>
            </Pressable>

        </View>
    );
}