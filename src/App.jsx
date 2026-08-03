import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Header from './components/Header';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodRecipe from './components/FoodRecipe';

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState(1);
  return (
    <>
      <Header />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <FoodList setfoodId={setfoodId} foodData={foodData} />
        </InnerContainer>

        <InnerContainer>
          <FoodRecipe foodId={foodId}></FoodRecipe>
        </InnerContainer>

      </Container>

    </>

  )
}

export default App
