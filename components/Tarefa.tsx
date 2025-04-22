import { Text, StyleSheet, View, Button } from "react-native";
import _tarefa from "../types/tarefa";

type _tarefaProps={
    dados:_tarefa, 
    handleToggleComplete: any,
    handleDeletePress: any
};

export default function Tarefa(props:_tarefaProps){
    return <View style={[styles.view, props.dados.concluida ? styles.concluido : {}]}>
                <View style = {styles.ViewTexto}><Text style = {props.dados.concluida ? styles.textoConcluido : {}}>Tarefa {props.dados.id}: {props.dados.texto}</Text></View>
                <View style={styles.botoes}>
                    <Button title={props.dados.concluida ? "Concluido" : "Concluir"} color="limegreen" onPress={()=>{ props.handleToggleComplete(props.dados.id) }}/>
                    <Button title="Excluir" color="red" onPress={()=>{ props.handleDeletePress(props.dados.id) }}/>
                </View>
            </View>;
}

const styles = StyleSheet.create({
    view:{
        borderWidth:1,
        flex: 1,
        flexDirection: "row",
        backgroundColor:'purple',
        alignItems: 'center',
    },
    ViewTexto: {
        flex: 1,
        flexShrink: 1, 
    },
    concluido: {
        backgroundColor: "lightgreen",
    },
    textoConcluido: {
        textDecorationLine: "line-through", 
        color: "gray",
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
})