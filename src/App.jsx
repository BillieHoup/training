import './App.css'
import ProductCard from './components/ProductCard'
import SomeList from './components/SomeList'

const ProductData = [
  {
    id:"1_man",
  img:"https://external-preview.redd.it/GBqd9cqoxwBoGt4FZfppFC40Al4WO-qgsOiYbrwLiIA.jpg?auto=webp&s=8f5367cbddc178f54716c6f41bb18b84becfa54b",
        hisName: "Diluc",
        age:22,
        description:"As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city."
  },

{
  id:"2_man",
   img:"https://pbs.twimg.com/media/GAJ1fBBa0AA9k1F?format=jpg&name=4096x4096",
  hisName:"Kaeya",
  age:21,
  isBeautiful:true,
  description:"In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has..."
},
{
  img:"https://genshin.global/wp-content/uploads/2023/07/childe-tartaglia-birthday-art-genshinimpact.webp",
  hisName:"Childe",
  age:20,
  description:"Meet Tartaglia — the cunning Snezhnayan whose unpredictable personality keeps people guessing his every move.   Don't be under any illusion as to what he might be thinking or what his intentions are. Just remember this: Behind that innocent, childlike exterior lies a finely honed instrument of war."  
},

{
  img:"https://preview.redd.it/official-zhongli-birthday-art-2022-v0-3iegkc1hq59a1.jpg?width=640&crop=smart&auto=webp&s=579c1d8e55141f1d60e51e3ab4b059ff383863ad",
  hisName:"Zhongli",
  age:6000,
  description:"Wangsheng Funeral Parlor's mysterious consultant. Handsome, elegant, and surpassingly learned.Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals."
}
      ]

function App() {
  return (
    <div>
      <SomeList></SomeList>
      { ProductData.map((item) => {
        return (
          <ProductCard
            key={item.id}
            img={item.img}
            hisName={item.hisName}
            age={item.age}
            isBeautiful={item.isBeautiful}
            description={item.description}
          />
        );
      }
)}

       </div>
  )
}



export default App