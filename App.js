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
  cor:'#73A2BF',
}

  calcularIMC = () => {
    const resultado = this.state.peso/(this.state.altura*this.state.altura);
    
    this.setState({
      imc: Math.ceil(resultado)
    });

    if(resultado < 18.5){
      this.setState({
        legenda: 'Magresa',
        cor: '#7f8c8d',
      });
    } else if(resultado >= 18.5 && resultado < 25){
      this.setState({
        legenda: 'Normal',
        cor: '#73A2BF',
      });
    } else if(resultado >= 25 && resultado < 30){
      this.setState({
        legenda: 'Sobrepeso',
        cor: '#f39c12',
      });
    } else if(resultado >= 30 && resultado < 40){
      this.setState({
        legenda: 'Obesidade 1',
        cor: '#e74c3c',
      });
    } else if(resultado >= 40 && resultado < 50){
      this.setState({
        legenda: 'Obesidade 2',
        cor: '#c0392b',
      });
    }

    
  }
  
  render() {
    
    
    
    return (
      <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>
      <Divider />
      
      <View style={[styles.seuPeso,{backgroundColor: this.state.cor}]}>
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

    
      
      </View>
    );
  }
}


const styles = StyleSheet.create({
  app:{
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#0A0B0D',
    height: '100%',
    
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
  padding: 8,
  borderRadius: 17,
  width: '80%',
  alignSelf:'center',
  
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
