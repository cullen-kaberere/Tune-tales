"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import Button from "@/components/Button"
import { useEffect, useState } from "react"
import { getWrappedData } from "@/lib/api"

export default function Wrapped() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getWrappedData();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading your music story...</p>;
  }

  if (!data || data.error) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>No Wrapped data found. Try connecting again.</p>;
  }

  const topTrack = data.top_tracks[0];
  const topArtist = data.top_tracks[0].artists[0];
  const summary = data.template_summary;

  return (
    <>
      <Header />
      <main className="page-container">
        <div className="container">
          <h1 className="page-title">Your Wrapped Card</h1>

          <Card>
            <div className="wrapped-card-container">
              <div>
                <h3 className="card-title">Top Track</h3>
                <p className="card-description">{topTrack.name}</p>
              </div>
              <div>
                <h3 className="card-title">Top Artist</h3>
                <p className="card-description">{topArtist.name}</p>
              </div>
              <div>
                <h3 className="card-title">Summary</h3>
                <p className="card-description">{summary}</p>
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
