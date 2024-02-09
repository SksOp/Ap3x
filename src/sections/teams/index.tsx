import About from "@/components/about"
import Container from "@/components/ui/container"
import { TEAM_MEMBERS } from "./constants";

function Teams() {
  const render = TEAM_MEMBERS.map((member) => {
    return (
      <About
        key={member.name}
        name={member.name}
        role={member.role}
        text={member.description}
        imageUrl={member.image}
        />
    );
  });
  return (
    <Container>
    <>  
        {render}
    </>
    </ Container>
  )
}

export default Teams;
