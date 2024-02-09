import Banner from "@/components/banner"
import CardSections from "@/components/cardSections"
import SearchBar from "@/components/searchBar"
import Container from "@/components/ui/container"

function Research() {
  return (
    <Container>
    <>  
        <Banner text="Research"/>
        <SearchBar />
        <CardSections />
    </>
    </ Container>
  )
}

export default Research
