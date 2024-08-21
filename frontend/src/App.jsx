import { useEffect } from "react"
import axios from "./url/axios.custiomzie";


function App() {

  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api/`)

      console.log("check api :", res);
    }
    fetchHelloWorld();
  }, [])

  return (
    <>
      hello world
    </>
  )
}

export default App
