import React, { useEffect } from "react";
import styled from "styled-components";
import animeServices from "../../services/animeServices";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function HomePage(props: IHomePageProps) {
  const fetchAnimePage = async () => {
    const animePage = await animeServices.getAnimePage(0).catch((err) => {
      console.log("Error", err);
    });
    console.log(animePage);
  };
  useEffect(() => {
    fetchAnimePage();
  }, []);
  return (
    <Container>
      <h1>Hot Anime</h1>
    </Container>
  );
}
