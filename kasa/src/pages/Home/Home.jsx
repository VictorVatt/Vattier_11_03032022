import { useEffect, useState } from 'react';
import {BodyHead, HomeWrapper, HeadContent, CardPartWrapper, BodyHeadContainer, MainContentContainer} from './HomeStyle'
import Card from '../../components/Card/Card';

function Home() {
  const [homeData, setHomeData] = useState([])

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const response = await fetch("https://api.jsonbin.io/b/62220b037caf5d67835f70d9")
        const homeData  = await response.json() 
        setHomeData(homeData)
      }
      catch {

      }
      finally {
        console.log("Datas loaded")
      }
    }
    fetchHomeData()
  }, [])
  return (
    <HomeWrapper>
      <BodyHeadContainer>
        <BodyHead>
          <HeadContent>Chez vous, partout et ailleurs</HeadContent>
        </BodyHead>
      </BodyHeadContainer>
        <MainContentContainer>
          <CardPartWrapper>
            {homeData.map((element) => (
              <Card key={element.id} title={element.title} picture={element.cover} id={element.id} />
            ))}

          </CardPartWrapper>   
        </MainContentContainer>
    </HomeWrapper>
  );
}

export default Home;
