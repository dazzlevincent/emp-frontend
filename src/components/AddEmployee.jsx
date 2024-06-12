import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddEmployee = () => {
    const [data, setData] = useState(
        {
            "title": "",
            "EName": "",
            "Department": "",
            "Salary": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8088/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successes")
                }
                else {
                    alert("Error")
                }
            }
        )

    }
    return (

        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EID:</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee Name:</label>
                                <input type="text" className="form-control" name='EName' value={data.EName} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" className="form-control" name='Department' value={data.Department} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Salary:</label>
                                <input type="text" className="form-control" name='Salary' value={data.Salary} onChange={inputHandler} />
                            </div>
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>

                        </div>



                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddEmployee