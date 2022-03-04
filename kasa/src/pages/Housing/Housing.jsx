import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Gallery from "../../components/Gallery/Gallery"

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
            {homeData.map((element) => (
                <div>
                <Gallery key={element.id} pictures={element.pictures} alt="photos maison" />
                </div>
            ))}
        </div>
    )
}

export default Housing