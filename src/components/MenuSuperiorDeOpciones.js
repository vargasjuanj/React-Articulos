import React, { Component } from 'react'
import {Container,Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button,Table} from 'react-bootstrap'
import '../assets/css/estilos.css'
export default class MenuSuperiorDeOpciones extends Component {

  constructor (props){
    super(props)
    this.state={codigo:undefined,denominacion:undefined}
  }

handleChange=(e)=>{
  e.preventDefault()
this.setState({[e.target.name]:e.target.value})

}
  buscarPorCodigo=(e)=>{
    e.preventDefault()
    window.location.href=`/home/${this.state.codigo}`
  }
  buscarPorDenominacion=(e)=>{
    e.preventDefault()
  
    window.location.href=`/home/${this.state.denominacion}`
  }

  handleKeyDown = (e) => {
  
    if (e.key === 'Enter' && this.state.denominacion!=undefined) {
   
     this.buscarPorDenominacion(e)
    }else if( e.key==='Enter' && this.state.codigo!=undefined ){

      this.buscarPorCodigo(e)
    }

  }

    render() {
        return (
            <div>
        <button className="btn btn-success" onClick={this.props.mostrar}>{this.props.msg}</button>
                  <Navbar bg="light" variant="light" className="justify-content-center">
                  <Navbar.Brand href="/">Home</Navbar.Brand>
      <li className="mr-sm-2">Codigo:</li>
    <Form inline>
      <FormControl onKeyDown={this.handleKeyDown} name ="codigo" onChange={this.handleChange}type="number" className="mr-sm-2" />
      <Button onClick={this.buscarPorCodigo} variant="outline-info">Buscar</Button>
    </Form>

    <li className="ml-2 mr-sm-2">Denominacion:</li>

    <Form inline>
      <FormControl onKeyDown={this.handleKeyDown} onChange={this.handleChange} name="denominacion" type="text"  className="mr-sm-2" />
      <Button onClick={this.buscarPorDenominacion} variant="outline-info">Buscar</Button>
    </Form>
    <Nav.Link href="/detalle/1" className="mr-sm-2">MAS BARATO</Nav.Link>
  </Navbar>
            </div>
        )
    }
}
