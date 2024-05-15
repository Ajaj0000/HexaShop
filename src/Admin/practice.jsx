// ProductForm.js

import React, { useEffect, useState } from 'react';

function ProductForm() {
    const [name, setname] = useState(null);
    const [price, setprice] = useState(null);
    const [icon, seticon] = useState(null)
    const [images, setimages] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('icon', icon);
        formData.append('image', images);

        // console.log(typeof formData)

        const res = await fetch('http://localhost:4440/men', {
            method: 'POST',
            body:formData,
        });
        const getres = await res.json()
        if (getres.status === true) {
            alert(getres.message)
        } else {
            alert(getres.message)
        }
    };


    const [Menn, setmenn] = useState([])
    const getmen = async () => {
        const res = await fetch("http://localhost:4440/getmen")
        const getres = await res.json()
        console.log(typeof getres.name)
        setmenn(getres)
    }
    useEffect(() => {
        getmen()
    }, [])

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='enter name' name='name' onChange={(e) => { setname(e.target.value) }} />
                    <input type="text" placeholder='price' name='price' onChange={(e) => { setprice(e.target.value) }} />
                    <input type="file" placeholder='icon' onChange={(e) => { seticon(e.target.files[0]) }} />
                    <input type="file" onChange={(e) => { setimages(e.target.files[0]) }} />
                    <button type='submit'>submit</button>
                </form>
            </div>

            <div className="main">
                {
                    Menn.map((item) => {
                        const base64string = btoa(String.fromCharCode(...new Uint8Array(item.image.data.toString('base64'))))
                        console.log(base64string)
                        // const base65string = itm.icon ? btoa(String.fromCharCode(...new Uint8Array(itm.icon.data))) : ''
                        return (
                            <>
                                <div className="child" key={item._id}>
                                    <h2>{item.name}</h2>
                                    <h3>{item.price}</h3>
                                    {item.image ? <img src={`data:images/jpg;base64,${base64string}`} alt={item.name} /> : ''}
                                    {/* {item.icon ? <img src={`data:${item.icon.contentType};base64,${item.icon.toString('base64')}`} alt={item.name} /> : ''} */}
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export { ProductForm };
