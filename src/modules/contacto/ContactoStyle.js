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
        marginBottom:20,
    },
    contactoHeading: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Robot',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.15,
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'rgba(187,187,187,0.5)',
   },
   imageContainer:{
       width:"90%",
       marginLeft:'auto',
       marginRight:'auto',
       marginTop:30,
   },
   btnContainer:{
       width:"90%",
       marginLeft:'auto',
       marginRight:'auto',
       marginTop:40,
       marginBottom:40,
   },
   socialMediaContainer:{
    width:"90%",
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:20,
   }    
})

export default style;