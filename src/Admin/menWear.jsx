// import React, { useEffect, useState } from "react";


// function MenWear() {

//     const [image, setimage] = useState("")
//     const [name, setname] = useState("")
//     const [icon, seticon] = useState("")
//     const [price, setprice] = useState("")
//     useEffect(() => {
//         MenCloths()
//     }, []);

//     // const [icon , seticon] = useState()
//     // const handleFileChange = (e) => {
//     //     const file = e.target.files[0];
//     //     if (e.target.name === 'image') {
//     //       setimage(file);
//     //     } else if (e.target.name === 'icon') {
//     //       seticon(file);
//     //     }
//     //   };

//     const menWear = async () => {
//         // e.preventDefault()
//         const formdata = new FormData()
//         formdata.append('image', image);
//         formdata.append("price", price);
//         formdata.append('icon', icon)
//         formdata.append("name", name);

//         const res = await fetch("http://localhost:4440/men", {
//             method: "POST",
//             body: formdata
//         })
//         if (!res.ok) {
//             throw new Error("something went wrong")
//         }
//         // const getres = await res.json()
//         // console.log(getres)
//         // if (getres.status === true) {
//         //     alert(getres.message)
//         //     window.location.reload()
//         // } else {
//         //     alert(getres.message)
//         // }
//     }

//     const [post, setpost] = useState([])
//     const [Getmen, setgetmen] = useState([...post])
//     const MenCloths = async () => {
//         const res = await fetch("http://localhost:4440/getmen")
//         const getres = await res.json()
//         console.log(getres)
//         // setgetmen(getres)
//         setpost(getres)
//         console.log(Getmen)
//     }

//     return (
//         <>
//             <form onSubmit={(e) => { e.preventDefault() }}>
//                 <input type="text" name="name" value={name} placeholder="Name" onChange={(e) => { setname(e.target.value) }} />
//                 <input type="file" name="image" value={image} placeholder="image" onChange={(e) => { setimage(e.target.files[0]) }} />
//                 <input type="file" name="icon" value={icon} placeholder="icon" onChange={(e) => { seticon(e.target.files[0]) }} />
//                 <input type="number" name="price" value={price} placeholder="price" onChange={(e) => { setprice(e.target.value) }} />
//                 <button type="submit" onClick={menWear}>submit</button>
//             </form>

//             {
//                 Getmen.map((itm, index) => {
//                     // const base64String = btoa(
//                     //     String.fromCharCode(...new Uint8Array(itm.img.data.data))
//                     // )
//                     // const base64String = btoa(String.fromCharCode(...new Uint8Array(itm.image.data.data)))
//                     // const base64Strings = btoa(String.fromCharCode(...new Uint8Array(itm.icon.data.data)))
//                     // const base64String = itm.image?.data ? btoa(String.fromCharCode(...new Uint8Array(itm.image.data.data))) : '';
//                     // const base64Strings = itm.icon?.data ? btoa(String.fromCharCode(...new Uint8Array(itm.icon.data.data))) : '';

//                     return (
//                         <>
//                             <div className="main" key={itm._id}>
//                                 <h1>{itm.name}</h1>
//                                 {/* {itm.image ? <img src={`data:image/png;base64,${base64String}`} alt="img1" /> : ""} */}
//                                 {/* {itm.icon ? <img src={`data:icon/png;base64,${base64Strings}`} alt="img1" /> : ""} */}
//                                 <p>{itm.price}</p>
                                
//                             </div>
//                         </>
//                     )
//                 })
//             }

//         </>
//     )
// }
// export { MenWear }