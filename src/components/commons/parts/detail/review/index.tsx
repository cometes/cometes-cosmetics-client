import { ConfigProvider, Image, Rate, Select } from "antd";
import WrapperWidth1000px from "../../wrapper/w1000";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RoundBorderButton from "../../buttons/roundBorder";
import { fallback } from "../../../../../commons/libraries/fallback";

export default function DetailReview(props) {
  return (
    <S.ReviewSection ref={props.reviewRef}>
      <WrapperWidth1000px margin="140px">
        <S.ReviewTitle>REVIEWS</S.ReviewTitle>
        <S.RateWrap>
          <Rate value={4.8} />
          <S.RateBox>
            <S.Rate>4.8</S.Rate>
            <S.RateText>(58명 참여)</S.RateText>
          </S.RateBox>
        </S.RateWrap>
        <S.ReviewWriteBtnWrap>
          <RoundBorderButton
            content="리뷰 작성하기"
            color="#fff"
            background="#111"
          />
        </S.ReviewWriteBtnWrap>
        <S.ReviewTop>
          <Select
            defaultValue="추천순"
            style={{ width: 100 }}
            bordered={false}
            suffixIcon={<FontAwesomeIcon icon={faAngleDown} />}
            options={[
              { value: "추천순", label: "추천순" },
              { value: "최신순", label: "최신순" },
              { value: "인기순", label: "인기순" }
            ]}
          />
          <S.ReviewInputBox>
            <S.ReviewInput placeholder="검색어 입력" />
            <S.ReviewInputIcon className="fi fi-rr-search" />
          </S.ReviewInputBox>
        </S.ReviewTop>
        <S.ReviewListWrap>
          <S.ReviewList>
            <S.ReviewWrap>
              <S.ReviewFlexWrap>
                <S.ReviewItemWrap>
                  <S.ReviewItemImg>
                    <Image fallback={fallback} />
                  </S.ReviewItemImg>
                </S.ReviewItemWrap>
                <S.RightWrap>
                  <S.ReviewItemWrap className="rate">
                    <S.ReviewItemBox>
                      <S.ReviewInfoWrap>
                        <ConfigProvider
                          theme={{
                            token: {
                              marginXS: 2
                            }
                          }}
                        >
                          <Rate value={4.8} style={{ fontSize: 16 }} />
                        </ConfigProvider>
                        <S.ReviewInfoBox>
                          <S.ReviewInfoText>
                            파우더 키스 립스틱
                          </S.ReviewInfoText>
                        </S.ReviewInfoBox>
                        <S.ReviewInfoBox>
                          <S.ReviewInfoText>저스트 큐리어스</S.ReviewInfoText>
                          <S.ReviewInfoColor />
                        </S.ReviewInfoBox>
                      </S.ReviewInfoWrap>
                    </S.ReviewItemBox>
                    <S.ReviewItemBox>
                      <S.ReviewWriter>햄쥐</S.ReviewWriter>
                    </S.ReviewItemBox>
                    <S.ReviewItemBox>
                      <S.ReviewDate>2023. 12. 15</S.ReviewDate>
                    </S.ReviewItemBox>
                  </S.ReviewItemWrap>
                  <S.ReviewItemWrap className="tags">
                    <S.ReviewInfoWrap>
                      <S.ReviewInfoTagWrap>
                        <S.ReviewInfoTagBox>발색력</S.ReviewInfoTagBox>
                        <S.ReviewInfoTagText>최고에요</S.ReviewInfoTagText>
                      </S.ReviewInfoTagWrap>
                      <S.ReviewInfoTagWrap>
                        <S.ReviewInfoTagBox>지속력</S.ReviewInfoTagBox>
                        <S.ReviewInfoTagText>오래가요</S.ReviewInfoTagText>
                      </S.ReviewInfoTagWrap>
                    </S.ReviewInfoWrap>
                  </S.ReviewItemWrap>
                </S.RightWrap>
              </S.ReviewFlexWrap>
              <S.ReviewItemWrap
                className={
                  props.isReviewDetailOn ? "active content" : "content"
                }
              >
                <S.ReviewItemBox
                  className={props.isReviewDetailOn ? "active" : ""}
                >
                  <S.ReviewContent
                    className={props.isReviewDetailOn ? "active" : ""}
                  >
                    쫀쫀하고 매끄럽게 발려요 촉촉-보단 쫀쫀! 이라 발색력도
                    좋구요~ 색도 여쿨라가 부담없이 형광등 데일리템으로 쓸 수
                    있는 색이에요. 노 포토스랑 쫀쫀하고 매끄럽게 발려요
                    촉촉-보단 쫀쫀! 이라 발색력도 좋구요~ 색도 여쿨라가 부담없이
                    형광등 데일리템으로 쓸 수 있는 색이에요. 노 포토스랑
                    쫀쫀하고 매끄럽게 발려요 촉촉-보단 쫀쫀! 이라 발색력도
                    좋구요~ 색도 여쿨라가 부담없이 형광등 데일리템으로 쓸 수
                    있는 색이에요. 노 포토스랑
                  </S.ReviewContent>
                </S.ReviewItemBox>
                <S.ReviewItemBox>
                  <S.ReviewTextBtn onClick={props.onClickReviewDetail}>
                    {props.isReviewDetailOn ? "접기" : "자세히 보기"}
                    <S.ReviewTextBtnIcon
                      className={
                        props.isReviewDetailOn
                          ? "fi fi-rr-angle-small-up"
                          : "fi fi-rr-angle-small-down"
                      }
                    />
                  </S.ReviewTextBtn>
                </S.ReviewItemBox>
              </S.ReviewItemWrap>
            </S.ReviewWrap>
          </S.ReviewList>
        </S.ReviewListWrap>
      </WrapperWidth1000px>
    </S.ReviewSection>
  );
}
