import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [ opponent, setOpponent ] = useState(null);
  const [ result, setResult ] = useState(null);

  const hands = {
    pedra: "✊",
    papel: "✋",
    tesoura: "✌"
  };

  const choices = Object.keys(hands);

  function move(choice) {
    const index = Math.floor(Math.random() * choices.length);

    const pc = choices[index];

    const win1 = choice == 'pedra' && pc == 'tesoura'
    const win2 = choice == 'papel' && pc == 'pedra'
    const win3 = choice == 'tesoura' && pc == 'papel'

    if (choice == pc) {
      setResult("empate");
    } else if (win1 || win2 || win3) {
      setResult("vitória");
    } else {
      setResult("derrota")
    }

    setOpponent(pc);
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jakenpon</Text>

      <View style={styles.content}>
        <View>
          <Text style={styles.player}>Oponente</Text>
          <Text style={styles.emoji}>
            {opponent === null ? '?' : hands[opponent]}
          </Text>
        </View>

        <Text style={styles.text}>X</Text>

        <View>
          <Text style={styles.player}>Você</Text>
          <View style={styles.emoni_Box}>
          { choices.map((item) => (
          <TouchableOpacity key={item} onPress={() => move(item)}>
            <Text style={styles.emoji}>{hands[item]}</Text>
          </TouchableOpacity>
          ))}
          </View>
        </View>

      </View>

      <Text style={styles.text}>Resultado: <Text style={styles.bold}>{result}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,  //top bottom
    paddingHorizontal: 20,   //left right
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: 100,
  },
  player: {
    fontSize: 20,
  },
  emoji: {
    fontSize: 32,
  },
  emoni_Box: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "800",
  },
}); 
