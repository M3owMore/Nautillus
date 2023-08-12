import {AiOutlineShoppingCart} from "react-icons/ai"

const Item = (props:any) => {
  return (
    <div className="w-40 rounded-md flex flex-col justify-start items-start py-1 shadow-md">
        <img src={`/product${props.product.id}.webp`} className="w-full h-40 object-cover" alt="product"/>
        <div className="flex items-start gap-2">
            {props.product.sale === 0 
            ? 
              <p className="font-bold text-zinc-700 text-lg">{props.product.price} $</p>
            : 
              <>
                <p className="font-bold text-green-600 text-lg">{props.product.price - props.product.sale} $</p>
                <p className="line-through  text-zinc-500 text-[10px]">{props.product.price} $</p>
              </>
            }
            
        </div>
        <p className="text-zinc-500 text-[10px]"><span className="text-green-600">30$</span>/month</p>
        <p className="text-zinc-700 font-bold text-xs">{props.product.name.length > 40 ? props.product.name.substr(0, 40) + "..." : props.product.name}</p>
        <button className="gap-2 font-bold mt-2 bg-green-500 text-white flex items-center justify-center text-xs w-full py-2 rounded-md"><AiOutlineShoppingCart className="text-lg"/> Add to cart</button>
    </div>
  )
}

export default Item