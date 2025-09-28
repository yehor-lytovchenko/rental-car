import { fetchCarById } from "@/lib/api/clientApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CarDeatailsClient from "./CarDetails.client";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";
import css from "./CarDetails.module.css";

interface CarDetailProps {
  params: Promise<{ id: string }>;
}

export default async function CarDetails({ params }: CarDetailProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id),
  });

  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <CarDeatailsClient />
          </HydrationBoundary>
        </div>
      </Container>
    </Section>
  );
}
