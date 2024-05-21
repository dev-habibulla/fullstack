import Image from 'next/image'

async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/product/allproduct')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
const Product = async () => {
  const data = await getData()
  return (
    // <ul>
    //   {data.map(item => (
    //     <li key={item.id}>
    //       <Image
    //         src={`http://localhost:8000${item.avatar}`}
    //         alt="Product Image"
    //         width={50}
    //         height={50}
    //       />
    //       <span>{item.name}</span>
    //     </li>
    //     <li>
    //       {item.saleprice ?
    //   <del> <span>{item.regularprice}</span></del> 
    //     :
    //     <span>{item.saleprice}</span>
    //     }
    //     </li>
    //   ))}
    // </ul>
    <ul>
    {data.map(item => (
      <li key={item.id}>
        <Image
          src={`http://localhost:8000${item.avatar}`}
          alt="Product Image"
          width={50}
          height={50}
        />
        <span>{item.name}</span>
        <div>
          {item.saleprice ? (
            <span>
              <del>{item.regularprice}</del> <span>{item.saleprice}</span>
            </span>
          ) : (
            <span>{item.regularprice}</span>
          )}
        </div>
      </li>
    ))}
  </ul>
  )
}

export default Product