import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, //Faz o elemento ocupar toda tela
        backgroundColor: '#8257E5',

        // Centraliza verticalmente os elementos filhos, pois por padrão
        // o flex-direction é column no react-native
        justifyContent: "center",

        //
        padding: 40,
    },
    content: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        color: '#fff',
        maxWidth: 180,
        lineHeight: 37,
    },
    description: {
        marginTop: 24,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
        fontSize: 16,
        lineHeight: 26,
        color: '#d4c2ff'
    },
    okButton: {
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }

});

export default styles;