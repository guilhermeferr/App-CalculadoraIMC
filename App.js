import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// or any pure javascript modules available in npm
import { Button, Divider, TextInput, DataTable } from "react-native-paper";


export default class App extends React.Component {
state = {
  imc: 0,
  peso: 0,
  altura: 0,
  legenda: "Iderteminado",
}

  calcularIMC = () => {
    const resultado = this.state.peso/(this.state.altura*this.state.altura);
    
    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5){
      this.setState({
        legenda: 'Magresa'
      });
    } else if(resultado >= 18.5 && resultado < 25){
      this.setState({
        legenda: 'Normal'
      });
    } else if(resultado >= 25 && resultado < 30){
      this.setState({
        legenda: 'Sobrepeso'
      });
    } else if(resultado >= 30 && resultado < 40){
      this.setState({
        legenda: 'Obesidade 1'
      });
    } else if(resultado >= 40 && resultado < 50){
      this.setState({
        legenda: 'Obesidade 2'
      });
    }

    
  }
  
  render() {
    
    
    
    return (
      <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>
      <Divider />
      
      <View style={styles.seuPeso}>
        <Text style={styles.kg}>{this.state.imc}</Text>
        <Text style={styles.diagnostico}>{this.state.legenda}</Text>
      </View>
      <Divider />
      <View style={styles.pesoAltura}>
        <TextInput label="Peso" mode='outlined' onChangeText={valor => {
          this.setState({peso: valor.replace(',','.')})
        }}/>
        <TextInput label="Altura" mode='outlined'onChangeText={valor => {
          this.setState({altura: valor.replace(',','.')})
        }}/>
      </View>
      <Button mode='contained' color='#96C6D9' onPress={this.calcularIMC}> Calcular
      </Button>

      <DataTable style={styles.tabelaPeso}>
    <DataTable.Header>
      <DataTable.Title>IMC</DataTable.Title>
      <DataTable.Title numeric>Classificação</DataTable.Title>
      
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell> abaixo 18.5</DataTable.Cell>
      <DataTable.Cell numeric>abaixo do peso</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
       <DataTable.Cell>18,5 a 24,9</DataTable.Cell>
       <DataTable.Cell numeric>peso ideal</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
       <DataTable.Cell>25 a 29,9</DataTable.Cell>
       <DataTable.Cell numeric>sobrepeso</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
       <DataTable.Cell>30 a 34,9</DataTable.Cell>
       <DataTable.Cell numeric>Obesidade 1</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
       <DataTable.Cell>35 a 39,9</DataTable.Cell>
       <DataTable.Cell numeric>Obesidade 2</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
       <DataTable.Cell>acima de 40</DataTable.Cell>
       <DataTable.Cell numeric>Obesidade 3</DataTable.Cell>
    </DataTable.Row>

    

  </DataTable>
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
  app:{
    padding: 10,
    backgroundColor: '#0A0B0D',
    //height: '100%',
    
  },
  legenda: {
    textAlign: 'center',
    color: '#f6f6f6',
    fontWeight: "bold",
    paddingVertical: 10,
    backgroundColor:'#213140',
  },
  kg:{
    textAlign: 'center',
    color: '#213140',
    fontWeight: "bold",
    fontSize: 28,
  },

  diagnostico:{
    textAlign: 'center',
    color: '#213140',
    fontWeight: "bold",
    fontSize: 24,
  },
  pesoAltura:{
    paddingVertical: 15,
    marginBottom: 30,

  },
  seuPeso:{
  marginTop:10,
  marginBottom:10,
  backgroundColor:'#73A2BF',
  padding: 8,
  borderRadius: 17,
  width: '80%',
  
  },
  tabelaPeso: {
    marginTop:10,
    backgroundColor:'#73A2BF',
  }


})
/** const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  }
}); **/
