import React from 'react'
import { View, Text} from 'react-native'


export default function Contacts({navigation}){
    return(
        <View style={{marginTop: 60, marginLeft:20}}>
            <View>
                <Text>Nome: Felipe</Text>
                <Text>Telefone: (11) 96589-6658</Text>
                <Text
                onPress={() => navigation.navigate('Information',
                {
                  nome: 'Felipe',
                  telefone: '(11) 96589-6658' ,
                  endereco: 'Raymundo Zanin',
                  profissao: 'Estudante',
                })}
                >Information...</Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text>Nome: Marcos</Text>
                <Text>Telefone: (11) 98699-6658</Text>
                <Text
                onPress={() => navigation.navigate('Information', {
                    nome: 'Marcos',
                  telefone: '(11) 312589-6658' ,
                  endereco: 'Raymundo Zanin',
                  profissao: 'Tecnico em eletronica'
                })}
                >Information...</Text>
            </View>
        </View>
    )
}