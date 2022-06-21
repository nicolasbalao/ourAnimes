import React, { FC } from "react"
import { Container, TitleSection, HeaderSection, ContainerAnime, ContainerSection, ContainerTop100, Ranking, ContainerFlex, GenreAnime } from "./home.style";
import AnimeCard from "../../components/animeCard/animeCard";
import useAxios from "../../Hooks/useAxios";

const HomePage: FC = () => {

  const { response, error, loading } = useAxios("http://localhost:3001/api/anime/");

  const isTopSection = (name: string): boolean => {
    if (name === "top") {
      return true;
    }
    return false;
  }

  return (
    <>
      {loading && (<p>Is loading</p>)}
      {error && (<p> Error </p>)}
      {!loading && !error &&
        <Container>
          {Object.keys(response?.data).map((key: string, index: number) => (
            !isTopSection(key) && (
              <ContainerSection>
                <HeaderSection>
                  <TitleSection>{key}</TitleSection>
                  <a>view all</a>
                </HeaderSection>
                <ContainerAnime>
                  {Object.keys(response?.data[key].media).map((anime, index) => (
                    <AnimeCard name={response?.data[key].media[anime].title.romaji} urlImage={response?.data[key].media[anime].coverImage.large} />
                  ))}
                </ContainerAnime>
              </ContainerSection>
            )
          ))}
          <HeaderSection>
            <TitleSection>Top 100</TitleSection>
            <a>View all</a>
          </HeaderSection>
          <ContainerTop100>
          </ContainerTop100>

        </Container>
      }
    </>
  );
}


export default HomePage;
