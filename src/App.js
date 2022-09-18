import Layout from './components/Layout';
import CocktailRandom from './pages/CocktailRandom';
import background from './background.webp'

function App() {
  return (
    <>
      <Layout>
        <CocktailRandom />
        <div className='shadow-background'></div>
        <img
          src={background}
          alt='background'
          className='w-full h-screen object-cover absolute'
        />
      </Layout>
    </>
  );
}

export default App;
