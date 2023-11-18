"use client";
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
  const [productName, setProductName] = useState('');
  const [sku, setSku] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [supplier, setSupplier] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [quantityOnHand, setquantityOnHand] = useState('');
  const [reOrderLavel, setreOrderLavel] = useState('');
  const [taxInformation, settaxInformation] = useState('');
  const [unitOfMeasure, setunitOfMeasure] = useState('');
  const [location, setLocation] = useState('');
  const [expairy, setExpairy] = useState('');
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('active');
  const onProductCreate = (e) => {
    e.preventDefault();
    let jsonData = {
      "product_name": productName,
      "sku": sku,
      "category": category,
      "description": description,
      "brand": brand,
      "supplier": supplier,
      "cost_price": costPrice,
      "selling_price": sellingPrice,
      "quantity_on_hand": quantityOnHand,
      "reorder_level": reOrderLavel,
      "tax_information": taxInformation,
      "unit_of_measure": unitOfMeasure,
      "location": location,
      "expiry_date": expairy,
      "weight": weight,
      "image": image,
      "notes": notes,
      "status": status,
    }

    fetch(process.env.NEXT_PUBLIC_API_LINK + 'add-products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`,
      },
      body: JSON.stringify(jsonData)

    })
      .then(async response => {
        let getResponse = await response.json();
        if (getResponse.status == 1) {
          toast.success("Product Added Successfully!", { theme: 'dark' })
          setProductName('');
          setSku('');
          setCategory('');
          setDescription('');
          setBrand('');
          setSupplier('');
          setCostPrice('');
          setSellingPrice('');
          setquantityOnHand('');
          setreOrderLavel('');
          settaxInformation('');
          setunitOfMeasure('');
          setLocation('');
          setExpairy('');
          setWeight('');
          setImage('');
          setNotes('');
          setStatus('active');
        }
        else {
          toast.error("Something Went Wrong!", { theme: 'dark' })
        }
      })
      .catch(error => console.log(error));
  }
  return (
    <Layout>
      <ToastContainer />
      <div className="container-xl">
        <div className="card">
          <div className="card-body">
            <form onSubmit={onProductCreate} id='productCreateForm' name='productCreateForm'>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="product_name" className="form-label">Product Name</label>
                    <input type="text" id='product_name' className="form-control" required value={productName} onChange={(e) => { setProductName(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="sku" className="form-label">SKU (Stock Keeping Unit)</label>
                    <input type="text" id='sku' className="form-control" required value={sku} onChange={(e) => { setSku(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Category" className="form-label">Category</label>
                    <input type="text" id='Category' className="form-control" required value={category} onChange={(e) => { setCategory(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input type="text" id='Description' className="form-control" required value={description} onChange={(e) => { setDescription(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Brand" className="form-label">Brand</label>
                    <input type="text" id='Brand' className="form-control" required value={brand} onChange={(e) => { setBrand(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Supplier" className="form-label">Supplier</label>
                    <input type="text" id='Supplier' className="form-control" required value={supplier} onChange={(e) => { setSupplier(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Cost_Price" className="form-label">Cost Price</label>
                    <input type="number" id='Cost_Price' className="form-control" required value={costPrice} onChange={(e) => { setCostPrice(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Selling_Price" className="form-label">Selling Price</label>
                    <input type="number" id='Selling_Price' className="form-control" rquired value={sellingPrice} onChange={(e) => { setSellingPrice(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="quantity_on_hand" className="form-label">Quantity on Hand</label>
                    <input type="number" id='quantity_on_hand' className="form-control" required value={quantityOnHand} onChange={(e) => { setquantityOnHand(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="recoder_lavel" className="form-label">Reorder Level</label>
                    <input type="number" id='recoder_lavel' className="form-control" required value={reOrderLavel} onChange={(e) => { setreOrderLavel(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="tax_info" className="form-label">Tax Information</label>
                    <input type="text" id='tax_info' className="form-control" required value={taxInformation} onChange={(e) => { settaxInformation(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="unit_of_measure" className="form-label">Unit of Measure</label>
                    <input type="text" id='unit_of_measure' className="form-control" required value={unitOfMeasure} onChange={(e) => { setunitOfMeasure(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="location" className="form-label">Location (if applicable)</label>
                    <input type="text" id='location' className="form-control" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="expiry" className="form-label">Expiry Date (if applicable)</label>
                    <input type="date" id='expiry' className="form-control" value={expairy} onChange={(e) => { setExpairy(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="weight" className="form-label">Weight/Dimensions</label>
                    <input type="text" id='weight' className="form-control" required value={weight} onChange={(e) => { setWeight(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Image" className="form-label">Image</label>
                    <input type="file" id='Image' className="form-control" value={image} onChange={(e) => { setImage(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="Notes" className="form-label">Notes</label>
                    <input type="text" id='Notes' className="form-control" value={notes} onChange={(e) => { setNotes(e.target.value) }} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group d-flex mt-4">
                    <div className="form-check ">
                      <input className="form-radio-input" type="radio" checked={status == 'active' ? true : false} id="defaultCheck1" name="status" onChange={(e) => { setStatus('active') }} />
                      <label className="form-radio-label m-1" for="defaultCheck1">
                        Active
                      </label>
                    </div>
                    <div className="form-check" style={{ marginLeft: "10px" }}>
                      <input className="form-radio-input" type="radio" checked={status == 'inactive' ? true : false} id="defaultCheck2" name="status" onChange={(e) => { setStatus('active') }} />
                      <label className="form-radio-label m-1" for="defaultCheck2">
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 text-center">
                  <button type="submit" className='btn btn-primary' form='productCreateForm'>Create Stock</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
