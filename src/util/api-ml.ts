import { ProductModel } from "../app/models/product";
interface MLProduct {
    id: string;
    title: string;
    price: number;
}

export const getDataML = async (term: string): Promise<ProductModel[]> => {
    const response = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?${term}`
    );
    const data = await response.json();
    const products:ProductModel[]=data.results.map((element:MLProduct,index:number)=>{
        return{
            id:index,
            name:element.title,
            price:element.price
        }
    });
    return products;
}