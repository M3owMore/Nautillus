import ScrollContainer from 'react-indiana-drag-scroll'
import Item from './Item'
import products from "../../products.json"

const Section = (props:any) => {
  function generateList(array:object[], size:number) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };
    return array.slice(0, size)
  };

  return ( 
    <div className='w-full px-5 mt-16'>
        <h2 className='font-bold text-2xl text-zinc-600'>{props.name}</h2>
        <ScrollContainer>
            <div className='flex w-max gap-4 py-4'>
                {generateList(products, 10).map((product:object, i:number) => {
                    return <Item product={product} key={i}/>
                })
                }
            </div>
        </ScrollContainer>
    </div>
  )
}

export default Section