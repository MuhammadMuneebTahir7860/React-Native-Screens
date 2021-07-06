import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    headerContainer: {
        justifyContent: 'flex-end',
        marginTop:50,
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        width:'90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cuentaHeading: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Robot',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.15,
    },
    lineStyleTop:{
        borderWidth: 0.5,
        borderColor:'rgba(187,187,187,0.5)',
        marginTop:30,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
   },
})

export default style;