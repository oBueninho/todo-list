import { useState } from 'react';
import {ScrollView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from './types/tarefa';
import Tarefa from './components/Tarefa';

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState<string>('');
  const [tarefas, setTarefas] = useState<_tarefa[]>([]);

  function adicionarTarefa(){
    if(novaTarefa == ''){
      alert("Insira um texto");
      return;
    }
    let tarefa : _tarefa = {
      id : tarefas.length+1,
      texto : novaTarefa,
      concluida : false,
    };
    setTarefas([...tarefas, tarefa]);
  }

  function mostrarTarefas(){
    let saida = tarefas.map(t => <Tarefa key={t.id} dados={t} handleToggleComplete={concluir} handleDeletePress={excluir} />);
    return saida;
  }

  function excluir(id :number){
    let f = tarefas.filter(t => t.id != id);
    setTarefas(f);
  }

  function concluir(id : number){
    let c = tarefas.map(t => t.id == id ? {...t, concluida : !t.concluida} : t);
    setTarefas(c);
  }

  return (
    <View style={styles.container} key="main">
      <View style={styles.tela}>
        <Text><b>Digite a tarefa:</b></Text>
        <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa}/>
        <Button title='Adicionar' color='#5b5c5b' onPress={adicionarTarefa}/>
        <ScrollView style = {styles.ViewTarefas}>
          {mostrarTarefas()}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    padding: 4,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    textAlign: 'center',
  },
  tela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    maxHeight: '25%',
  },
  ViewTarefas:{
    width: 400,
  },
});
