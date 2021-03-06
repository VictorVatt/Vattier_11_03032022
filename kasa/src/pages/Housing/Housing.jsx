import { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import Gallery from "../../components/Gallery/Gallery"
import HouseInformations from "../../components/HouseInformations/HouseInformations"
import Dropdown from "../../components/Dropdown/Dropdown"

function Housing() {
    const { id } = useParams()
    const [homeData, setHomeData] = useState([])

    useEffect(() => {
      async function fetchHomeData() {
        try {
          const response = await fetch("https://api.jsonbin.io/b/62220b037caf5d67835f70d9")
          const homeData  = await response.json() 
          setHomeData(homeData.filter((element) => element.id === id))
        }
        catch {
  
        }
        finally {
            console.log("Housing data loaded")
        }
      }
      fetchHomeData()
    }, [])
    return(
        <div>
            {homeData.map((house) => (
              <div key={house.id}>
                  <Gallery pictures={house.pictures} id={house.id} alt="photos maison" />
                  <HouseInformations  title={house.title} host={house.host} location={house.location} tags={house.tags} rating={house.rating}/>
                  <DropdownContainer>
                    <Dropdown content={house.description} title="Description" type="description" size={"small"}/>
                    <Dropdown content={house.equipments} title="Equipements" type="equipments" size={"small"}/>
                  </DropdownContainer>
              </div>
            ))}
        </div>
    )
}
export default Housing

const DropdownContainer = styled.div`
  margin-bottom: 2rem;
  @media (min-width: 1024px) {
    display:flex;
    padding: 0 20px;  
    justify-content: space-between;
    max-width: 1240px;
    margin: 1rem auto 2rem auto;
}`