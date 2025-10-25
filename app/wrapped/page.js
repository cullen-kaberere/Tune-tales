import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import Button from "@/components/Button"

export default function Wrapped() {
  return (
    <>
      <Header />
      <main className="page-container">
        <div className="container">
          <h1 className="page-title">Your Wrapped Card</h1>

          <Card>
            <div className="wrapped-card-container">
              <div>
                <div className="album-art">🎵</div>
                <h3 className="card-title">Top Track</h3>
                <p className="card-description">"Midnight Dreams" by Luna Echo</p>
              </div>
              <div>
                <div className="album-art">🎤</div>
                <h3 className="card-title">Top Artist</h3>
                <p className="card-description">Luna Echo</p>
              </div>
              <div>
                <div className="album-art">💿</div>
                <h3 className="card-title">Top Album</h3>
                <p className="card-description">"Neon Nights" Collection</p>
              </div>
            </div>

            <div className="share-button-container">
              <Button size="lg">Generate My Card</Button>
              <Button variant="secondary" size="lg">
                Share
              </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
