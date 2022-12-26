import { MDBBtn} from 'mdb-react-ui-kit'
import React, { Component } from 'react'

export default class ItemCard extends Component {
    
  render() {
    return (
         
     <tr style={{height:"40px"}} >
      <th scope="row"> {this.props.item.id}</th>
      <td>{this.props.item.action}</td>
      <td>{this.props.item.stat?"Completed":"Uncompleted"}</td>
      <td className='buttons'>
        <MDBBtn type="submit" color="danger" className="ms-1" onClick={()=>this.props.handleDelete(this.props.item.id)}>
          Delete
        </MDBBtn>
        <MDBBtn type="submit" color="success" className="ms-2" style={this.props.item.stat?{backgroundColor:"#70c553"}:{backgroundColor:"#c23725"}} onClick={()=>this.props.handleFinish(this.props.item.id)} >
        {this.props.item.stat?"Finished":"Finish"}
        </MDBBtn>
      </td>
    </tr>

    )
  }
}
