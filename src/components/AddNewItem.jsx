import React, { Component } from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBInput,
    MDBRow
  } from "mdb-react-ui-kit";
export default class AddNewItem extends Component {
    state={
        newAction:""
    }
    handleSubmit=(e)=>{
      e.preventDefault()
      const newOne={
          id:this.props.item.at(-1).id+1,action:this.state.newAction,isDone:false
      }
      this.props.handleAdd(newOne)
  }
  render() {
    return (
      <div>
        <MDBCard className="rounded-3"style={{width:"1000px",backgroundColor: "#eee"}}>
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol className='col' size="12">
                  <h5 style={{marginRight:"20px"}}>Enter a task here</h5>
                    <MDBInput value={this.state.newAction} onChange={e=>this.setState({newAction:e.target.value})} id="form1" type="text"/>
                  </MDBCol>
                  <MDBCol className='col' size="12">
                    <MDBBtn id='Btn_submit' type="submit" onClick={this.handleSubmit}>Save</MDBBtn>
                  </MDBCol>
                </MDBRow>
                </MDBCardBody>
                </MDBCard>
                </div>
    )
  }
}
