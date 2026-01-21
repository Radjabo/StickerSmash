import { StyleSheet } from "react-native";

export const boutonViewer = StyleSheet.create({
    boutonContainer: {
        width: '320',
        height: '68',
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    bouton: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    boutonLabel: {
        color: '#fff',
        fontSize: 16,
    }
});