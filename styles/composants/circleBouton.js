import {StyleSheet} from 'react-native';

export const circleBtn = StyleSheet.create({
    circleBoutonContainer: {
        width: 84,
        height: 84,
        borderRadius: 42,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        padding: 3,
    },
    circleBouton: {
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff',
    },
});