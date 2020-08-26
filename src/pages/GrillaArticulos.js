import React, { Component } from 'react'
import {Container,Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button,Table} from 'react-bootstrap'
import datos from '../assets/json/articulos.json'
export default class GrillaArticulos extends Component {
    constructor (props){
        super(props)
        this.state={datos}
        //alert(this.state.datos[0].codigo)
        console.log(this.state)
    }

    
    calcularPromedio=(precios)=>{
        return precios.reduce((anterior,actual)=>anterior+=actual)/precios.length
      }
    render() {
        let param= this.props.match.params.buscado
        let aux = Number(param)      
        let datos =[]
if(param==undefined){
    datos=this.state.datos
}else if(isNaN(aux)){
datos=this.state.datos.filter(element=>element.articulo.toLowerCase().includes(param.toLowerCase()))
}else{
    datos=this.state.datos.filter(element=>element.codigo===aux)
}


        return (
            <div>
        
               <Table striped bordered hover>
  <thead>
    <tr>
      <th>Articulo</th>
      <th>Codigo</th>
      <th>Fecha Vencimiento </th>
      <th>Promedio Precio</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
      {
       datos.map(element=>{
           return (
            <tr key={element.codigo}>
            <td>{element.articulo}</td>
            <td>{element.codigo}</td>
            <td>{element.fechaVencimiento}</td>
            <td>{this.calcularPromedio(element.preciosRelevados)}</td>
            <td><a href={`/detalle/${element.codigo}` }>VER DETALLES</a></td>
            </tr>
           )
       })
      }
    
  </tbody>
</Table> 
            </div>
        )
    }
}
