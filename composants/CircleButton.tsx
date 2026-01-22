import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { circleBtn } from "@/styles/composants/circleBouton";

type Props = {
    onPress: () => void;
};

export default function CircleBouton({ onPress }: Props) {
    return(
        <View style={circleBtn.circleBoutonContainer}>
            <Pressable style={circleBtn.circleBouton} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    )
};  