
import { useState } from "react";

type ProductProps = {
  name: string;
  price: number;
  images: string[];
};

function useImages(initialImages:string[]) {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    setImages(images.concat(`image-${images.length + 1}.png`));
  };
  return { images, addImage };
}

export function Product({ name, price, images: initialImages }: ProductProps) {
  const { images, addImage } = useImages(initialImages);

  return (
    <div>
      <div>
        {name} ${price} 
        <div>{images.map(x=><div>{x}</div>)}</div>
      </div>
      <button onClick={addImage}>Add image</button>
      {images.map((src) => (
        <img src={src} alt="" />
      ))}
    </div>
  );
}



function App() {

  return (
    <>
     <Product
      name="Shampoo"
      price={2.99}
      images={[]}
    ></Product>
    </>
  )
}

export default App
