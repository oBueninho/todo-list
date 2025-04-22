import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function BuscaCEP() {
    const [cep, setCep] = useState(''); 
  const [end, setEnd] = useState({
    logradouro: '',
    complemento: '',
    unidade: '',
    bairro: '',
    localidade: '',
    uf: '',
    estado: '',
    regiao: '',
    ibge: '', 
    gia: '',
    ddd: '',
    siafi: '',
  });

  async function buscarCEP(){
    let r = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
    let dados = await r.json();
    setEnd(dados);
  }

  return (
    <View style={styles.container}>
      <Text>Digite seu CEP</Text>
      <TextInput
        style={styles.textinput}
        value={cep}
        onChangeText={setCep}
      />
      <Button
        title='Procurar CEP'
        onPress={buscarCEP}
      />
      <Text>Logradouro: {end.logradouro}</Text>
      <Text>Complemento: {end.complemento}</Text>
      <Text>Unidade: {end.unidade}</Text>
      <Text>Bairro: {end.bairro}</Text>
      <Text>Localidade: {end.localidade}</Text>
      <Text>UF: {end.uf}</Text>
      <Text>Estado: {end.estado}</Text>
      <Text>Região: {end.regiao}</Text>
      <Text>IBGE: {end.ibge}</Text>
      <Text>Gia: {end.gia}</Text>
      <Text>DDD: {end.ddd}</Text>
      <Text>Siafi: {end.siafi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: '7px'
    },
    textoutput:{
      color: 'green',
    }
  });