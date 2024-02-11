import Banner from "@/components/banner";
import CardSections from "@/components/research";
import SearchBar from "@/components/searchBar";
import Container from "@/components/ui/container";

function Research() {
  return (
    <Container className="px-4">
      <>
        <Banner text="Research" />
        <SearchBar />
        <CardSections />
      </>
    </Container>
  );
}

export default Research;
