import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Modal, Card, Nav, Form, FormControl, NavDropdown, Button, Table } from 'react-bootstrap'
import datos from '../assets/json/articulos.json'
export default class DetalleArticulo extends Component {
    constructor(props) {
        super(props)
        this.state = { datos }
        //alert(this.state.datos[0].codigo)
        console.log(this.state)
    }

    calcularPromedio=(precios)=>{
        return precios.reduce((anterior,actual)=>anterior+=actual)/precios.length
      }
     masBarato=()=>{
        let promedios= this.state.datos.map(element=>this.calcularPromedio(element.preciosRelevados))
        let min= Math.min(...promedios)
        return this.state.datos.find(element=>this.calcularPromedio(element.preciosRelevados)===min)
          }
volver=()=>{
    window.history.back()
}

    render() {
        let param = this.props.match.params.codigo
let element=null
        if(param === '1'){
           
element=this.masBarato()
        
        }else{
            element = this.state.datos.find(element => element.codigo == Number(param))

        }
        let color = element.esPromocion ? 'green' : 'red'

        return (

            <div>
                <Container>
                    <Row>
                        <Col ><img className="img-fluid" src={require(`../assets/img/${element.foto}`)}></img></Col>
                        <Col className="align-self-center "><h1 className="display-1" style={{ color: color }}>{element.articulo}</h1></Col>
                    </Row>

                    <Row>

                        <Col><p>Código:</p>
                            <p>Rubro</p>
                            <p>Es Promocion</p>
                            <p>Fecha Vencimiento</p></Col>
                        <Col><p>{element.codigo}</p>
                            <p>{element.rubro}</p>
                            <p>{element.esPromocion ? 'SI' : 'NO'}</p>
                            <p>{element.fechaVencimiento}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="align-self-center"><p>Precios Relevados:</p></Col>
                        <Col>
                            <ul className="pl-4">
                                {element.preciosRelevados.map((precio,index) => {
                                    return (
                                        <li key={index} style={{listStyleType:'circle'}}>{precio}</li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col><p>Promedio Precios Relevados</p></Col>
                            <Col>{this.calcularPromedio(element.preciosRelevados)}</Col>
                    </Row>
<button className="btn btn-danger btn-block" onClick={this.volver}>Volver</button>
                </Container>
            </div>
        )
    }
}
