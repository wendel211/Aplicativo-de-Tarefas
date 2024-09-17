import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Task } from './src/components/task';
import { CardNumber } from './src/components/cardNumber';

export default function App() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>([]);
  const [taskText, setTaskText] = useState(""); 
  const [countTasks, setCountTasks] = useState(0);


  function handleAddTask() {
    if (taskText.trim().length === 0) {  // Corrigido: Verifica se o texto está vazio ou só tem espaços
      return Alert.alert('Digite uma tarefa válida!');
    }
    if (tasks.some((task) => task.description === taskText)) {
      return Alert.alert('Você já cadastrou essa tarefa!');
    }
    
    const newTask = { description: taskText, check: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  // Atualiza o contador de tarefas sempre que a lista de tasks mudar
  useEffect(() => {
    setCountTasks(tasks.length);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.Input}
          placeholder="Adicionar uma tarefa"
          placeholderTextColor="#fff"
          keyboardType='default'
          onChangeText={setTaskText}
          value={taskText}
        />
        <TouchableOpacity style={styles.InputButton} onPress={handleAddTask}>
          <Feather name="plus-square" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', gap: 16 }}>
        <CardNumber />
        <CardNumber />
        <CardNumber />
      </View>

      <Text>Lista de Tarefas: {countTasks}</Text>
      
      <View style={styles.tasks}>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
        ({item}) => (
            <Task/>
        )}

        ListEmptyComponent={() => (
          <View>
            <Text style={{ color: '#fff' }}>Você ainda não cadastrou nenhuma tarefa!</Text>
            <Text style={{ color: '#fff' }}>Cadastre uma nova tarefa acima!</Text>
          </View>
        )}
      />
      </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385E',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 64,
    gap: 16,
  },
  InputContainer: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#252627',
  },
  Input: {
    flex: 1,
    padding: 16,
    color: '#fff',
  },
  InputButton: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  tasks: {
    justifyContent: 'flex-start',
    width: '100%',
    flexDirection: 'column',
  }
});
