import React, { useState } from 'react';
import "../../styles/topfold.css"
import Modal from '../Modal/Modal'


const TopFold = () => {

  const [moDal, setModal] =  useState(false)

  return (
    <div className='topfold'>
      <div className='tf-left'>
        <div className='tf-heading'>
        <div className='tf__title'>Hello<span className='head_style'>안녕</span>NFT</div>
        </div>
        <div className='tf-des'>
          졸려배고파밥줘
        </div>
        <div className='tf-r-bg-blob'></div>
      </div>
      <div className='tf-btns'>
       <button className='bbtn1'>둘러보기</button>
       <button onClick={()=> setModal(true)} className='bbtn2'>민팅하기</button>
       
        {moDal && <Modal setModal={setModal}/>} 
       
      </div>
    </div>
  )
}

export default TopFold