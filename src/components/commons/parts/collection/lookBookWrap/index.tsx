import * as S from "./style";
import * as C from "../style";

export default function CollectionLookBookWrap(props) {
  return (
    <C.CollectionSection>
      <C.Container>
        <S.LookBookTitle>{props.data?.lookbookTitleT}</S.LookBookTitle>
        <S.LookBookTitle>{props.data?.lookbookTitleB}</S.LookBookTitle>
        <S.LookBookWrap>
          <S.LookBookLeft>
            <S.LookBookImgBox className="LT">
              <S.LookBookImg src={props.data?.lookBookL?.img} />
              <S.LookBookDeco
                className="RT"
                background={props.data?.lookbookDeco}
              />
            </S.LookBookImgBox>
            <S.LookBookTextBox>
              <S.LookBookDeco
                className="LB"
                background={props.data?.lookbookDeco}
              />
              <S.LookBookSlogan>
                {props.data?.lookBookL.sloganT}
              </S.LookBookSlogan>
              <S.LookBookSlogan className="btm">
                {props.data?.lookBookL.sloganB}
              </S.LookBookSlogan>
            </S.LookBookTextBox>
          </S.LookBookLeft>
          <S.LookBookRight>
            <S.LookBookRightBox>
              <S.LookBookDecoText>
                {props.data?.lookBookRT.slogan}
              </S.LookBookDecoText>
              <S.LookBookImgBox className="RT">
                <S.LookBookImg src={props.data?.lookBookRT.img} />
              </S.LookBookImgBox>
            </S.LookBookRightBox>
            <S.LookBookRightBox className="RB">
              <S.LookBookImgBox className="RB">
                <S.LookBookImg src={props.data?.lookBookRB.img} />
                <S.LookBookDeco
                  className="RB"
                  background={props.data?.lookbookDeco}
                />
              </S.LookBookImgBox>
              <S.LookBookDecoText>
                {props.data?.lookBookRB.slogan}
              </S.LookBookDecoText>
            </S.LookBookRightBox>
          </S.LookBookRight>
        </S.LookBookWrap>
      </C.Container>
    </C.CollectionSection>
  );
}
