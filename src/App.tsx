import Navbar from "./components/navbar"
import Footer from "./components/footer"

export default function App() {
  return(
    <>
    <Navbar />
      <section className="h-screen flex items-center px-40">
        <div className="flex flex-col gap-3">
          <div className="text-7xl font-pixel-square">
            Every month tells a story
          </div>
          <div className="text-4xl font-mono">Yours is waiting to be designed</div>
          <div className="w-fit bg-foreground text-background px-6 py-3 hover:bg-lime-500 rounded-lg">GET INVITED</div>
        </div>
      </section>
    <Footer/>
    </>
  )
}
  