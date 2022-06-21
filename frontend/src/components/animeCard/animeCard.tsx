import React, { FC } from 'react';
import { TitleAnime, ImgAnime, ImgContainer } from './animeCard.style';


interface Props {
  name: string;
  urlImage: string;
}

const CardAnime: FC<Props> = ({ name, urlImage }) => {

  console.log(name);

  return (
    <div>
      <ImgContainer href="test">
        <ImgAnime src={urlImage} />
      </ImgContainer>
      <TitleAnime>{name}</TitleAnime>
    </div >
  );
}

export default CardAnime;
