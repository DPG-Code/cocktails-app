import Layout from './components/Layout';
import CocktailRandom from './pages/CocktailRandom';
import background from './background.webp'

function App() {
  return (
    <>
      <Layout>
        <CocktailRandom />
        <div className='z-10 w-full h-full bg-[#000000a1] absolute'></div>
        <img src={background} alt="background" className='w-full h-full object-cover absolute'/>
      </Layout>
    </>
  );
}

export default App;
