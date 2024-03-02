import '../AddProductComponent/addProduct.css'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {updateProduct} from '../../Redux/slice'
import {useEffect} from 'react'
// console.log(data)

export default function Update(props){
    let newD = props.upObj
    const data = useSelector(state=>state.productList.value) 
    const [pname, setPname] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [cat, setCat] = useState('')
    const [stock, setStock] = useState('')
    const [status, setStatus] = useState('')
    const [img, setImg] = useState('')
    const dispatch = useDispatch()

    let handleSubmit = (e) =>{
        e.preventDefault()
        // e.preventDefault()
        let obj = {
            id : newD.id,
            productName : pname, 
            description : desc,
            variation : [{price : price, stock : stock, prouctImage: img}],
            category : cat,
            status : status
        }
        console.log(obj)
        dispatch(updateProduct(obj))
        // e.target.reset()
    }

    useEffect(()=>{
        // console.log(newD)
        if(newD && newD.variation){
            setPname(newD.productName)
            setDesc(newD.description)
            setCat(newD.category)
            setStatus(newD.status)
            setPrice(newD.variation[0].price)
            setStock(newD.variation[0].stock)
            setImg(newD.variation[0].productImage)
        }
        // else{
        //     setPname('')
        //     setDesc('')
        //     setCat('')
        //     setStatus('')
        //     setPrice('')
        //     setStock('')
            
        // }
    },[newD])

    return (<div className="container-fliud addProduct">
    <div className="container addProductInner">
    <h1 className="text-center">Update Product</h1>
            <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-lg-12 input">
                <label>*Product Name</label>
                <input type="text" className="form-control" value={pname} onChange={(e)=>setPname(e.target.value)} required/>
            </div>
            <div className="col-lg-12 textarea">
                <label>*Description</label>
                {/* <input type="text" className="form-control"/> */}
                <textarea className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} required></textarea>
            </div>
            <div className="col-lg-12 input">
                <label>*Price</label>
                <input type="number" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} required/>
            </div>
            <div className="col-lg-12 input">
                <label>*Stock</label>
                <input type="number" className="form-control" value={stock} onChange={(e)=>setStock(e.target.value)} required/>
            </div>
            <div className="col-lg-6 select">
                <label>*Category</label>
                <br/>
                <select className="form-control" required value={cat} onChange={(e)=>setCat(e.target.value)}>
                    <option value=''>Select</option>
                    {data?data.map(p=><option>{p.category}</option>):''}
                </select>
            </div>
            <div className="col-lg-6 select">
            <label>*Status</label>    
            <br/>
            <select className="form-control" value={status} required onChange={(e)=>setStatus(e.target.value)}>
                    <option vlaue=''>Select</option>
                    <option>In stock</option>
                    <option>Limited stock</option>
                    <option>No stock</option>
                        {/* <option>Sports</option>
                        <option>Outdoor</option>
                        <option>Toys</option>
                        <option>Hobbies</option> */}
                </select>
            </div>
            <div className="col-lg-12 button"><button>Save</button></div>
        </div>
            </form>
        </div>
        </div>
        )
}