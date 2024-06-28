import { Aside } from "./sunnyside-agency-landing-page-main/components/Aside"
import { Footer } from "./sunnyside-agency-landing-page-main/components/Footer"
import { Header } from "./sunnyside-agency-landing-page-main/components/Header"
import { Main } from "./sunnyside-agency-landing-page-main/components/Main"

function App() {

  return (
    <div className="min-h-screen">
      <Header/>
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  )
}

export default App
