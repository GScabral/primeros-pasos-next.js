import { CardProduct } from "./CardProduct";
import { getDataML } from "../../util/api-ml";
import { useEffect, useState } from "react";


export const ListComponent = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Obtener los datos cuando el componente se monta
        const fetchData = async () => {
            const result = await getDataML('q=zapatillas');
            console.log("resultados",result)
            setProductos(result);  // Actualizar estado con los productos obtenidos
            setLoading(false);     // Desactivar estado de carga
        };

       fetchData(); // Ejecutar la función de obtención de datos
    }, [])

    if (loading) {
        return <p>Cargando Productos...</p>
    }



    return (
        <>
            {productos.map((element, index) => (
                // Agregar return o usar paréntesis para devolver JSX
                <span key={index}>
                    <CardProduct product={{ id: index, name: element.name, price: element.price }} />
                </span>
            ))}
        </>
    );
};