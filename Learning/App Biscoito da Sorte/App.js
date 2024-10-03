import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
      biscoitoQuebrado: false,
      btnFrase: 'Quebrar biscoito'

    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.entrar = this.entrar.bind(this);

    this.frases = [
      "A vida trará coisas boas se tiver paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível.",
      "Gente todo dia arruma os cabelos, por que não o coração?",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
      "A juventude não é uma época da vida, é um estado de espírito.",
      "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
      "Dê toda a atenção à formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
      "Siga os bons e aprenda com eles.",
      "Não importa o tamanho da montanha, ela não pode tapar o sol.",
      "O bom-senso vai mais longe do que muito conhecimento.",
      "Quem quer colher rosas deve suportar os espinhos.",
      "São os nossos amigos que nos ensinam as mais valiosas lições.",
      "A adversidade é um espelho que reflete o verdadeiro eu.",
      "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
      "Uma bela flor é incompleta sem suas folhas.",
      "Sem o fogo do entusiasmo, não há o calor da vitória."
    ];

  };

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: "\"" + this.frases[numeroAleatorio] + "\"",
      img: require('./src/biscoitoAberto.png'),
      btnFrase: 'Abrir outro biscoito',
      biscoitoQuebrado: true

    })
  }

  entrar(){
    if(this.state.biscoitoQuebrado == false){
      this.quebraBiscoito()
    }else{
      this.setState({
        textoFrase: '',
        img: require('./src/biscoito.png'),
        btnFrase: 'Quebrar biscoito',
        biscoitoQuebrado: false
  
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.texto}>{this.state.textoFrase}</Text>
          
        <TouchableOpacity style={styles.botao} onPress={this.entrar}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>{this.state.btnFrase}</Text>
          </View>
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#dd7b22',
    fontSize: 20,
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

})

export default App;