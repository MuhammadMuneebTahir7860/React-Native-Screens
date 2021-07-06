import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C1327',
    },
    logoContainer: {
        marginRight: 30,
        marginLeft: 30,
    },
    logo: {
        position: "absolute",
        width: "100%",
        height: 72,
        top: 83,
    },
    inputContainer: {
        position: 'absolute',
        top: 270,
        width: '90%',
        marginRight: 20,
        marginLeft: 20,
    },
    btnContainer: {
        flex:2,
        position: 'absolute',
        top: 650,
        marginRight: 20,
        marginLeft: 20,
        width: '90%',
    },
});

export default style;