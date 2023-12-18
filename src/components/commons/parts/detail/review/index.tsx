import { ConfigProvider, Rate, Select } from "antd";
import WrapperWidth1000px from "../../wrapper/w1000";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RoundBorderButton from "../../buttons/roundBorder";

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
        <S.ReviewBox>
          <S.ReviewList>
            <S.ReviewTable>
              <tbody>
                <tr>
                  <td rowSpan={2}>
                    <S.ReviewItemImg />
                  </td>
                  <S.ReviewTd colSpan={2}>
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
                        <S.ReviewInfoText>파우더 키스 립스틱</S.ReviewInfoText>
                      </S.ReviewInfoBox>
                      <S.ReviewInfoBox>
                        <S.ReviewInfoText>저스트 큐리어스</S.ReviewInfoText>
                        <S.ReviewInfoColor />
                      </S.ReviewInfoBox>
                    </S.ReviewInfoWrap>
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
                  </S.ReviewTd>
                  <S.ReviewTd>
                    <S.ReviewWriter>햄쥐</S.ReviewWriter>
                  </S.ReviewTd>
                  <S.ReviewTd>
                    <S.ReviewDate>2023. 12. 15</S.ReviewDate>
                  </S.ReviewTd>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <S.ReviewItemBtm>
                      <S.ReviewContent>
                        쫀쫀하고 매끄럽게 발려요 촉촉-보단 쫀쫀! 이라 발색력도
                        좋구요~ 색도 여쿨라가 부담없이 형광등 데일리템으로 쓸 수
                        있는 색이에요. 노 포토스랑
                      </S.ReviewContent>
                      <S.ReviewTextBtn>
                        자세히 보기
                        <S.ReviewTextBtnIcon className="fi fi-rr-angle-small-down" />
                      </S.ReviewTextBtn>
                    </S.ReviewItemBtm>
                  </td>
                </tr>
              </tbody>
            </S.ReviewTable>
          </S.ReviewList>
        </S.ReviewBox>
      </WrapperWidth1000px>
    </S.ReviewSection>
  );
}
