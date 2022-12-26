import React, { Component } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
  } from "mdb-react-ui-kit";
import AddNewItem from './AddNewItem';
import ItemCard from './ItemCard';
export default class ItemList extends Component {
  render() {
    return (
      <div>
        <section className="vh-100" >
      <MDBContainer className="py-5 h-100" style={{width:"1000px",backgroundColor: "#eee"}}>
        <MDBRow className="d-flex justify-content-center align-items-center" style={{width:"1000px",backgroundColor: "#eee"}}>
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
              <AddNewItem handleAdd={this.props.handleAdd} item={this.props.list}></AddNewItem>
                <MDBTable className="mb-4"style={{width:"1000px"}}>
                  <MDBTableHead style={{height:"30px"}} >
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                  {this.props.list.map((task,i)=><ItemCard item={task} key={i} handleDelete={this.props.handleDelete} handleFinish={this.props.handleFinish}/>)}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
      </div>
    )
  }
}
