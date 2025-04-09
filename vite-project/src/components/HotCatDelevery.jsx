// ProductDetail.jsx
import { useParams } from "react-router-dom";
import cardData from "./data/hotrolledcarddarta"; // move cardData to separate file if needed
import { ThicknessGrid } from "./HelperComponent";

const HotCatDelevery = () => {
    const thicknessValues = [
        "1.6", "1.8", "2.0", "2.2", "2.5", "2.8", "3.0",
        "3.2", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0",
        "6.5", "7.0", "7.5", "8.0", "9.0", "10.0",
        "11.0", "12.0", "13.0", "14.0", "15.0",
        "16.0", "18.0", "20.0", "22.0", "25.0", "30.0"
      ];
  const { id } = useParams();
  const product = cardData[id];

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-80 mb-4" />
      <p>{product.brand}</p>
      <ThicknessGrid values={thicknessValues}/>

      {/* <p>Thickness: {product.thickness}</p>
      <p>Width: {product.width}</p>
      <p>Length: {product.length}</p>
      <p>{product.delivery}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        {product.buttonName}
      </button> */}
    </div>
  );
};

export default HotCatDelevery;
