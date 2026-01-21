import { boutonViewer } from "@/styles/composants/boutonViewer";
import React from "react";
import { Pressable, View, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

type Props = {
    label: string;
    theme?: 'primary';
};

export default function Bouton({ label, theme }: Props) {
    if (theme === 'primary') {
        return (
            <View style={[boutonViewer.boutonContainer, 
                {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18,}
            ]}>
                <Pressable 
                    style={[boutonViewer.bouton, 
                        {backgroundColor: '#fff',}
                    ]} 
                    onPress={() => alert('Vous avez presse un bouton.')}
                >
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={boutonViewer.boutonIcon} />
                    <Text style={[boutonViewer.boutonLabel, {color: '#25292e',}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={boutonViewer.boutonContainer}>
            <Pressable style={boutonViewer.bouton} onPress={() => alert('Vous avez presse un bouton.')}>
                <Text style={boutonViewer.boutonLabel}>{label}</Text>
            </Pressable>

        </View>
    );
}