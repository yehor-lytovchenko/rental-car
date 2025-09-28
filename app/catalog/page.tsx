import Container from "@/components/Container/Container";
import ClientCatalog from "./Catalog.client";
import Section from "@/components/Section/Section";

export default function Catalog() {
  return (
    <Section>
      <Container>
        <ClientCatalog />
      </Container>
    </Section>
  );
}
