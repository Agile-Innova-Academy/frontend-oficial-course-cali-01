import React from 'react'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';


const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {

  return (
    <div>
        
    <Carousel arrows dotPosition="left" infinite={false}>
      <div>   
        <img src="https://res.cloudinary.com/danimel/image/upload/v1649345660/plantas-3-e1586222650112_fprx9q.jpg" alt=""/>
      </div>
      <div>
        <img src="https://res.cloudinary.com/danimel/image/upload/v1649345660/bigstock-Garden-Flowers-Plants-and-Too-281611147-770x360_dhxfwb.jpg" alt=""/>
      </div>
      <div>
        <img src="https://res.cloudinary.com/danimel/image/upload/v1649345661/plantas-estratificacion-e1569788986220_gafdat.jpg" alt=""/>
      </div>
      <div>
    <img src="https://res.cloudinary.com/danimel/image/upload/v1649345661/plantas-clasificacion-e1569789109898_n94bdu.jpg" alt=""/>
      </div>
    </Carousel>
    <Link to='/e' ><button>Ir A ver</button></Link>
  </div>
  )
}

export default Home