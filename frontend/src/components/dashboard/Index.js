import React from 'react'
import img from '../../assets/index-store.png';

const Index = () => {

  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{background:'#EADCCC', height:'100vh'}}>
        <div className='w-auto gap-5 d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='subtitles' style={{color:'#202F2C'}}>Bienvenido Matias!</h1>
            </div>
            <img style={{maxWidth:'450px', maxHeight:'450px'}} src={img} />
        </div>
    </div>
  )
}

export default Index