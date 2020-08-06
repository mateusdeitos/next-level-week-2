import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, //Faz o elemento ocupar toda tela
        backgroundColor: '#f0f0f7',

        // Centraliza verticalmente os elementos filhos, pois por padrão
        // o flex-direction é column no react-native
        justifyContent: "center",

        //
        padding: 40,
    },
    
});

export default styles;