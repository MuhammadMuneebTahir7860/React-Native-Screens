import React  from "react";
import {Text,View,Image} from 'react-native';
import style from './DetallesStyle';
import greenCircleImage from '../../../../assets/greenCircle.png';
import yellowCircleImage from '../../../../assets/yellow.png';
import orangeCircleImage from '../../../../assets/orange.png';
import pinkCircleImage from '../../../../assets/pink.png';
import logo from "../../../../assets/black-logo.png";
export default function Detalles(){
    return(
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={{width:'90%',marginTop:30,marginRight:'auto',marginLeft:'auto'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Estructura de capital
                </Text>
            </View>
            <View style={{width:'90%',marginTop:10,marginRight:'auto',marginLeft:'auto'}}>
                <Text style={{fontSize:10}}>
                Estas son las fuentes de donde proviene el dinero para cubrir el costo total requerido por el proyecto.
                </Text>
            </View>
            <View style={{width:"90%",marginTop:30,marginRight:'auto',marginLeft:'auto'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{width:'8%',marginTop:2}}>
                        <Image source={greenCircleImage} />
                    </View>
                    <View style={{width:'50%'}}>
                        <Text style={{fontStyle:'normal',fontWeight:'300'}}>
                        Deuda Preferente
                        </Text>
                    </View>
                    <View style={{width:"32%"}}>
                        <Text>
                        $2,000,000
                        </Text>
                    </View>
                    <View style={{width:'10%'}}>
                        <Text>
                        20%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{width:"90%",marginTop:30,marginRight:'auto',marginLeft:'auto'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{width:'8%',marginTop:2}}>
                        <Image source={yellowCircleImage} />
                    </View>
                    <View style={{width:'50%'}}>
                        <Text style={{fontStyle:'normal',fontWeight:'300'}}>
                        Deuda Junior
                        </Text>
                    </View>
                    <View style={{width:"32%"}}>
                        <Text>
                        $2,000,000
                        </Text>
                    </View>
                    <View style={{width:'10%'}}>
                        <Text>
                        20%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{width:"90%",marginTop:30,marginRight:'auto',marginLeft:'auto'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{width:'8%',marginTop:2}}>
                        <Image source={orangeCircleImage} />
                    </View>
                    <View style={{width:'50%'}}>
                        <Text style={{fontStyle:'normal',fontWeight:'300'}}>
                        Capital desarrollador
                        </Text>
                    </View>
                    <View style={{width:"32%"}}>
                        <Text>
                        $2,000,000
                        </Text>
                    </View>
                    <View style={{width:'10%'}}>
                        <Text>
                        20%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{width:"90%",marginTop:30,marginRight:'auto',marginLeft:'auto'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{width:'8%',marginTop:2}}>
                        <Image source={pinkCircleImage} />
                    </View>
                    <View style={{width:'50%'}}>
                        <Text style={{fontStyle:'normal',fontWeight:'300'}}>
                        Preventa
                        </Text>
                    </View>
                    <View style={{width:"32%"}}>
                        <Text>
                        $2,000,000
                        </Text>
                    </View>
                    <View style={{width:'10%'}}>
                        <Text>
                        20%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{width:"90%",marginTop:30,marginRight:'auto',marginLeft:'auto'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View style={{width:'8%'}}>
                    </View>
                    <View style={{width:'50%'}}>
                        <Text style={{fontStyle:'normal',fontWeight:'bold'}}>
                        Total
                        </Text>
                    </View>
                    <View style={{width:"32%"}}>
                        <Text style={{fontWeight:'bold'}}>
                        $10,000,000
                        </Text>
                    </View>
                    <View style={{width:'13%'}}>
                        <Text style={{fontWeight:'bold'}}>
                        100%
                        </Text>
                    </View>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginTop:30,marginLeft:'auto',marginRight:'auto'}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>
                Detalles del presupuesto
                </Text>
            </View>
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:20}}>
                <Text style={{fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:20}}>
                <Text style={{fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Documentos
                </Text>
            </View>
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:10,display:"flex",flexDirection:'row'}}>
                <View style={{width:"70%"}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#959595'}}>
                Documento
                </Text>
                </View>
                <View style={{width:"30%"}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#959595'}}>
                 Ver
                </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:10,display:"flex",flexDirection:'row'}}>
                <View style={{width:"70%"}}>
                <Text style={{color:"black",fontSize:14}}>
                Documento 1
                </Text>
                </View>
                <View style={{width:"30%"}}>
                <Text style={{fontSize:14,color:'#1E75E0'}}>
                Ver documento
                </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:10,display:"flex",flexDirection:'row'}}>
                <View style={{width:"70%"}}>
                <Text style={{color:"black",fontSize:14}}>
                Documento 2
                </Text>
                </View>
                <View style={{width:"30%"}}>
                <Text style={{fontSize:14,color:'#1E75E0'}}>
                Ver documento
                </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:10,display:"flex",flexDirection:'row'}}>
                <View style={{width:"70%"}}>
                <Text style={{color:"black",fontSize:14}}>
                Documento 3
                </Text>
                </View>
                <View style={{width:"30%"}}>
                <Text style={{fontSize:14,color:'#1E75E0'}}>
                Ver documento
                </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:30}}>
                <Text style={{color:'#0C1327',fontWeight:'bold',fontSize:16}}>
                Responsables del proyecto
                </Text>
            </View>
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:10,display:"flex",flexDirection:'row'}}>
                <View style={{width:"70%"}}>
                <Text style={{color:"black",fontSize:14}}>
                Nombre
                </Text>
                </View>
                <View style={{width:"30%"}}>
                <Text style={{fontSize:14,color:'#959595'}}>
                Cargo
                </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:10,display:"flex",flexDirection:'row'}}>
                <View style={{width:"60%"}}>
                <Text style={{color:"black",fontSize:14}}>
                Juan Pérez
                </Text>
                </View>
                <View style={{width:"40%"}}>
                <Text style={{fontSize:14,color:'black'}}>
                Representante legal
                </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:10,display:"flex",flexDirection:'row'}}>
                <View style={{width:"60%"}}>
                <Text style={{color:"black",fontSize:14}}>
                Juan Pérez
                </Text>
                </View>
                <View style={{width:"40%"}}>
                <Text style={{fontSize:14,color:'black'}}>
                Representante legal
                </Text>
                </View>
            </View>
            <View style={style.lineStyleTop} />
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:30}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Sobre el desarrollador
                </Text>
            </View>
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:30}}>
              <Image source={logo} />
            </View>
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                Fibra Cero
                </Text>
            </View>
            <View style={{width:"90%",marginRight:'auto',marginLeft:'auto',marginTop:20}}>
                <Text style={{fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>

        </View>
    )
}