import Room from './room'
import Level from './level'

function Home() {
    let room = new Room(10,10)
    room.buildCooridor('l')


    return(
        <div>
            <Level />
        </div>
       
       
    );
  }
   
  export default Home