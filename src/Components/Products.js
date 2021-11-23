import React, { useEffect, useState } from 'react';
import  axios  from 'axios';

const Products = ()=>{

    const[products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/list').then(resp=>{
            setProducts(resp.data);
        })
        .catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    {
                       products.map(product=>(
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.description}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Products;