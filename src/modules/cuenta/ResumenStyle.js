import { StyleSheet } from "react-native";

const style =StyleSheet.create({
    lineStyleTop:{
        borderWidth: 0.5,
        borderColor:'rgba(187,187,187,0.5)',
        marginTop:30,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
   },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'rgba(187,187,187,0.5)',
        marginTop:10,
   },
   portFolioCard:{
       width:'90%',
       marginLeft:'auto',
       marginRight:'auto',
       paddingTop:20,
       paddingBottom:20,
       display:'flex',
       flexDirection:'row',
   },
   ImageSection:{
       width:'24%',
   },
   percentageContainer:{
       width:'21%',
   },
   priceContiner:{
       width:'21%',
       paddingTop:18,
   },
   DateContiner:{
    width:'21%',
    paddingTop:18,
   },

})

export default style;