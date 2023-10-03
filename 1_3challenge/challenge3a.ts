//primitive parameters

//the function updateProduct changes the state of the product instance
//but the function signature doesn't update a product. Parameters are passed by value
//and copied onto the stack. There is no reference to any object to update in the function signature.
//
//A function can't exist by itself. It has to be part of a class or
//it has to operate on data.

class CatalogItem{
  private name:string=""
  private num:number

  constructor(name:string, startingInventory:number){
    this.name = name.toLowerCase();
    this.num=startingInventory
  }
  
  updateProduct(name:string, newInventory:number ){
    this.name=name;
    this.num = newInventory;
  }
  
}

const c3a = new CatalogItem("shoe", 100);
console.log(c3a)

//only in react
// function Item(){
//   const [name,setName] = useState("")

//   function updateItem(name:string){
//     setName(name)
//   }
// } 
/* function updateProduct(name: string, price: number, images: string[]) {
  // update logic here ...
  console.log({ name, price, images });
}

updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"]);
 */

//confusing, in a class model updateProduct should belong to a class
//or in the functional world a function can operate on objects directly without
//the need for classes. Most operations in FP revolve around a list or hashtable.
//a function has no state

//it isnt clear where the object is. Lets assume it is in an array

const product_data_3a = [
  {
    name: "3 qt pot",
    price: 19.44,
    images: ["small_pot.png"],
  },
  {
    name: "6 qt pot",
    price: 29.99,
    images: ["medium_pot.png"],
  },
  {
    name: "12 qt pot",
    price: 49.99,
    images: ["large_pot.png"],
  },
];

//
function updateProduct_3a(name: string, price: number, images: string[]) {
  if (name === "3 qt pot") {
    console.log("found!!");
    console.log("name:", name, "price:", price, " images:", images);
  }
}

product_data_3a.forEach((x) => updateProduct_3a(x.name, x.price, x.images));
