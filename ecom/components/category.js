import Link from "next/link"

async function getData() {
  const res = await fetch('http://localhost:8000/api/v1/product/allcat')
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


const Category = async () => {
  const data = await getData()
  return (
    <ul>
      {data.map((item) => (
        <li key={item._id}>
          <Link href={`/category/${item._id}`}>
            {item.name}
          </Link>
          {item.subcatList.length > 0 && (
            <div className="dropDown">
              <ul>
                {item.subcatList.map(ditem => (
                  <li key={ditem._id}>{ditem.name}</li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>

  )
}

export default Category