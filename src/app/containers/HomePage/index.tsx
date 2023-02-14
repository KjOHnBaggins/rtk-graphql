import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import animeServices from "../../services/animeServices";
import { GetAnimePage } from "../../services/animeServices/__generated__/GetAnimePage";
import { setAnimePage } from "./homePageSlice";
import { HotAnime } from "./hotAnime";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

export function HomePage(props: IHomePageProps) {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeServices.getAnimePage(0, 10).catch((err) => {
      console.log("Error", err);
    });
    console.log(animePage);
    if (animePage) return setAnimePage(animePage);
  };
  useEffect(() => {
    fetchAnimePage();
  }, []);
  return (
    <Container>
      <h1>Hot Anime</h1>

      <HotAnime />
    </Container>
  );
}
