import React, { useEffect, useState } from "react";
import { hideLoading, showLoading } from "../redux/loaderslice";
import { useDispatch } from "react-redux";
import { Row, Col, Input , message } from "antd";
import { getAllMovies } from "../APIcalls/movies"
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import moment from "moment";
import Search from "antd/es/transfer/search";




function Home() {

  const [movies , setMovies] = useState([])
  const [search, setSearch] = useState('')


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const getData= async()=>{
     dispatch(showLoading())

     const response = await getAllMovies()

     setMovies(response.data)


     dispatch(hideLoading())
  }


  useEffect(()=>{
    getData()
  } , [])

function handlesearch(e){
setSearch(e.target.value)

}


  return (
    <>
    <div className="Home-body">
      <Row className="justify-content-center w-100">
        <Col xs={{span: 24}} lg={{span: 12}}>
          <Input placeholder="search movies" type="text" value={search} onChange={(e)=>handlesearch(e)}
          style={{
            border:'1px solid #CD5C5C'
          }}
          ></Input>
          <br /><br /><br />
          <br /><br />

        </Col>
      </Row>


      <Row>

      <Row className="justify-content-evenly"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
      {movies && movies.filter(movie=> movie.title.toLowerCase().includes(search.toLowerCase())).map(movie => 
        <Col className="gutter-row mb-5" key={movie._id} span={{
          xs: 24,
          sm: 24,
          md: 12,
          lg: 10
        }}>
          <div className="text-center">
            <img onClick={() => {navigate(`/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`)}} className="cursor-pointer card-shawdow" src={movie.poster} alt="Movie Poster" width={230} height={350} style={{borderRadius: "8px"}}/>
            <h3 onClick={()=> {navigate(`/movie/${movie._id}?date=${moment().format("YYYY-MM-DD")}`)}} className="cursor-pointer">{movie.title}</h3>
          </div>
        </Col>
        )}
      </Row> 

      </Row>
      </div>
    </>
  );
}

export default Home;

