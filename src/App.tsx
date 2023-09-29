import { useCampaingStore } from "./store/useCampaingStore";
import { Start } from "./components/Start";
import { Campaings } from "./components/Campaings";




function App() {
  //Las respuestas hay que guardarlas en un estado
  const campaings = useCampaingStore((state) => state.campaings);


  return (
    <>

      <span className="flex justify-center items-center h-screen  ">
       
        {campaings.length === 0 && <Start />}
        {campaings.length > 0 && <Campaings />}
      </span>
    </>
  );
}

export default App;
