import { StyleSheet } from "react-native";

const style=StyleSheet.create({
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
    ajustesHeading: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Robot',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.15,
    },
    perfilContainer:{
        height:54,
        marginTop:30,
        backgroundColor:'#E5E5E5',
    },
    perfilListContainer:{
        width:'90%',
        height:70,
        marginLeft:'auto',
        marginRight:'auto',
        justifyContent:'center',
    },
    lineStyleTop:{
        borderWidth: 0.5,
        borderColor:'rgba(187,187,187,0.5)',
   },
   seguridadContainer:{
    height:54,
    marginTop:30,
    backgroundColor:'#E5E5E5',
   }
})

export default style;