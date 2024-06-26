import React from 'react'
import { productDatas } from '../../data'
import { getImageUrl } from '../../Utils';
import './Product.css'

//const allProducts=productDatas.filter((p)=>p.id>=1);
//const allProducts=productDatas.filter((p)=>p.expireDate.getMonth()>5);

function Check({p,expirationDate}){
  let content=null;
  if(p.expireDate.getMonth()>expirationDate){
    content=<img alt='expired' className='expired-img' src='/images/expired.png'></img>;
  }
  return content;
}

const products=productDatas.map((p)=>
      <section className='product-design'>
                <img alt='product-image' src={getImageUrl(p)} className='img-design'></img>
                <h2 style={{fontSize:'1em',color:'white'}}>{p.id}</h2>
                <h1>{p.name}</h1>
                <h5>{p.price}</h5>
                <h6>{p.description}</h6>
                <h6>Expire Date : {p.expireDate.toDateString()}</h6>
                <Check p={p} expirationDate={3}></Check>
      </section>
);

export default function Product() {
  return (
    <section className='base-design'>
      {products}
    </section>
  )
}
