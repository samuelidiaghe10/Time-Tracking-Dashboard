import { Main } from "./intro-section-with-dropdown-navigation-main/components/Main"
import { Navbar } from "./intro-section-with-dropdown-navigation-main/components/Navbar"


function App() {

  return (
    <div className="lg:p-10 p-3 gap-10 lg:gap-0 flex  flex-col bg-Almost-White min-h-screen">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
