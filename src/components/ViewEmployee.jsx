import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewEmployee = () => {
  const[data,changeData]=useState([])
  const fetchData =  () =>{
      axios.get("http://localhost:8088/view",data).then(
          (response) => {
              changeData(response.data)
          }
      ).catch(
          (error)=>{
              console.log(error.message)
              alert(error.message)
          }
      ).finally()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavBar/>
        <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Employee ID:</th>
                        <th scope="col">Employee Name:</th>
                        <th scope="col">Department</th>
                        <th scope="col">Salary</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {data.map(
                        (value, index) => {
                          return <tr>
                            <th scope="row">{value.title}</th>
                            <td>{value.EName}</td>
                            <td>{value.Department}</td>
                            <td>{value.Salary}</td>
                            
        
                          </tr>
        
                        }
        
                      )}
        
        
                    </tbody>
                  </table>
        
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    

  )
}

export default ViewEmployee