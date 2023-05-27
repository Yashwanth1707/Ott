    import { useEffect, useState } from "react";

    const Products = () => {

        let [products, setProduct] = useState(null);
    useEffect( ()=>{const url = 'https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=3256804591426248';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8c61011db1mshc6b001e867e516ep1a5145jsn85a87f455ade',
            'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
        }
    };
        fetch(url,options)
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data.result.item);
                        setProduct(data)})} ,[])
        
            return (  
            <div>

            </div>
            );
    }
    
    export default Products;