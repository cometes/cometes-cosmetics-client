import styled from "@emotion/styled";

const BannerImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 500px;
  min-height: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function Banner(props: { src: string }) {
  return (
    <>
      <BannerImg src={props.src} />
    </>
  );
}
