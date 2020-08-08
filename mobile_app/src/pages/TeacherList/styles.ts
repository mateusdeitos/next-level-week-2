import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, //Faz o elemento ocupar toda tela
        backgroundColor: '#f0f0f7',
    },
    teacherList: {
        marginTop: -40,
    },

    teacherListContent: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    searchForm: {
        marginTop: 30,
        marginBottom: 24,

    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',

    },

    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    submitButton: {
        backgroundColor: '#04b361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }

});

export default styles;