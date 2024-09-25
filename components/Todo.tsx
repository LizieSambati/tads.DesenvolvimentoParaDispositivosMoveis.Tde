import { StyleSheet, Pressable, View, Text } from "react-native";

type ToDoProps = {
    id: number;
    title: string;
    description?: string;
    done: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const Todo = ({ id, title, description, done, onToggle, onDelete }: ToDoProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textDescription}>{description}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => onToggle(id)}
                    style={styles.buttonChange}
                >
                    <Text>{done ? "Desmarcar" : "Marcar"}</Text>
                </Pressable>

                <Pressable
                    onPress={() => onDelete(id)}
                    style={styles.buttonChange}
                >
                    <Text>Excluir</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
        padding: 6,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    textContainer: {
        margin: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonContainer: {
        margin: 4,
        flexDirection: 'row',
    },
    buttonChange: {
        margin: 6,
        padding: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    textTitle: {
        textAlign: 'auto',
        color: 'black',
        fontWeight: '500',
        fontSize: 24,
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 8,
        padding: 2,
    },
    textDescription: {
        textAlign: 'auto',
        color: 'blue',
        fontWeight: '500',
        fontSize: 16,
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 8,
        padding: 2,
    },
});

export default Todo;