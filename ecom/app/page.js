import Banner from "@/components/Banner";
import Category from "@/components/category";
import CategoryName from "@/components/categoryName";
import Product from "@/components/product";
import Button from 'react-bootstrap/Button';



export default function Home() {
  return (
   <>
   {/* <Category/>
   <Product/> */}
         <Banner/>
         <CategoryName/>
         <Product/>
   </>
  );
}
