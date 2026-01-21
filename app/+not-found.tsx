import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { styles } from "../styles/app/indexStyles";


export default function NotFoundScreen () {
    return (
        <> 
            <Stack.Screen options={{title: 'Oops! Not Found'}} />
            <View style={styles.container}>
                <Link href="/" style={styles.bouton}>
                    Retour à l'accueil!
                </Link>
            </View>
        </>
    );
}