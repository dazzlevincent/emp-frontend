import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [data, setData] = useState(
        {
            "title": ""
        }
    )
    const [result, setResult] = useState([])



    // DELETE EVENT HANDLING

    const deleteemployee = (id) => {
        let input = { "_id": id }

        axios.post("http://localhost:8088/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.success = "success") {
                    alert("Successfuly deleted!!")


                }
                else {
                    alert("error")
                }
            }
        ).catch()


    }


    // VALUE FETCHING
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {

        console.log(data)
        axios.post("http://localhost:8088/Search", data).then((response) => {
            setResult(response.data)
        }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally()


    }
    return (
        <div>
           <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <row>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                                <label htmlFor="" className="form-control">
                                    <div className="row">
                                        <div className="col col-12 col-sm-6 col-md-6 col-ld-6 col-xl-6 col-xxl-6">
                                            <label htmlFor="" className="form-control">Search:</label>
                                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />
                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-ld-6 col-xl-6 col-xxl-6">
                                            <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                                        </div>
                                    </div>
                                </label>



                            </div>
                        </row>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">



                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">EID:</th>
                                                <th scope="col">Employee Name:</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Salary</th>
                                                <th>

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                result.map(
                                                    (value, index) => {
                                                        return <tr>
                                                            <th scope="row">{value.title}</th>
                                                            <td>{value.EName}</td>
                                                            <td>{value.Department}</td>
                                                            <td>{value.Salary}</td>
                                                            <td>
                                                                <button className="btn btn-danger" onClick={() => { deleteemployee(value._id) }}>DELETE</button>
                                                            </td>

                                                        </tr>
                                                    }
                                                )
                                            }

                                        </tbody>
                                    </table>





                                </div>
                            </div>

                        </div>
                    </div>
                </div>











            </div>



        </div>
    )
}

export default Search