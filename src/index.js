import {SafeAreaView, StyleSheet, Text, View} from "react-native"
import {FailedNetwork} from "./Components"
import {useConnection} from "./hooks";

export default () => {
    useConnection()

    return(
        <>
            <SafeAreaView style={{flex: 0, backgroundColor: '#2471D9'}}/>
            <View style={styles.container}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#383838'}}>Contenido de la aplicación</Text>
                <FailedNetwork />
            </View>
            <SafeAreaView style={{flex: 0, backgroundColor: '#2471D9'}}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
})