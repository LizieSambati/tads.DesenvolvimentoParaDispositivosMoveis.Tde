import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    E aeeeee, cadê as tarefas???
                </Text>
            </View>
        </SafeAreaView>
    );
}
export default Index;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    text: {
        color: "#f1f8"
    }
})