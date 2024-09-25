// Implemente um app de lista de tarefas.
// Funcionalidades: adicionar uma tarefa, excluir uma tarefa, listar as tarefas e marcar tarefas como concluído
// Restrições de código: as tarefas devem ser um componente separado. 
// Cada tarefa deve ter um título obrigatório, e uma descrição opcional.
// Estilizar o visual do app


import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useTodo from "@/hooks/useTodo";
import Todo from "@/components/Todo";


const Index = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTodo, deleteTodo, markAsDone, todoList } = useTodo();

    const handleCreateTodo = () => {
        if (title.trim() === '') {
            return;
        }
        createTodo(title, description)
        setTitle('')
        setDescription('')
    }

    return (
        <SafeAreaView>
            <View style={styles.createContainer}>
                <Text style={styles.textNewTodo}>
                    Nova Tarefa!
                </Text>
                <View style={styles.inputTextContainter}>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder="título"
                    />
                </View>
                <View style={styles.inputTextContainter}>
                    <TextInput
                        value={description}
                        onChangeText={setDescription}
                        placeholder="descrição"
                    />
                </View>
                <TouchableOpacity
                    onPress={handleCreateTodo}
                    style={styles.createButton}
                >
                    <Text>
                        Criar
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.todoContainer}>
                    {todoList.map((todo) => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            description={todo.description}
                            done={todo.done}
                            onToggle={() => markAsDone(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    ))}
                </View>
            </ScrollView>

        </SafeAreaView >
    );
}
export default Index;

const styles = StyleSheet.create({

    createContainer: {
        alignSelf: 'center',
        padding: 4,
        width: '70%',
        marginBottom: 8,
        justifyContent: 'center',
    },
    inputTextContainter: {
        padding: 8,
        width: '90%',
        borderWidth: 1,
        borderColor: '#D3B4D9',
        marginBottom: 8,
    },
    createButton: {
        padding: 8,
        width: '20%',
        borderWidth: 1,
        borderColor: '#D3B4D9',
    },
    todoContainer: {
        alignSelf: 'center',
        padding: 4,
        width: '100%',
        borderWidth: 1,
        borderColor: '#D3B4D9',
    },
    textNewTodo: {
        color: 'red',
        textAlign: 'auto',
        fontWeight: '500',
        fontSize: 20,
    }
})