import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Title from "../../../../commons/parts/title";
import * as S from "./style";
import * as T from "../../../../commons/parts/table/style";
import ButtonHeight30px from "../../../../commons/parts/buttons/height30px";
import WrapperWidth800px from "../../../../commons/parts/wrapper/w800";

export default function OrderList() {
  return (
    <WrapperWidth800px>
      <Title title="마이 쇼핑" />
      <T.SectionWrap>
        <T.Subtitle>주문/배송 조회</T.Subtitle>
        <S.ProcessWrap>
          <div>
            <S.ProcessTitle>결제완료</S.ProcessTitle>
            <S.ProcessText className="active">2</S.ProcessText>
          </div>
          <S.ProcessIcon icon={faChevronRight} />
          <div>
            <S.ProcessTitle>배송준비</S.ProcessTitle>
            <S.ProcessText>0</S.ProcessText>
          </div>
          <S.ProcessIcon icon={faChevronRight} />
          <div>
            <S.ProcessTitle>배송중</S.ProcessTitle>
            <S.ProcessText>0</S.ProcessText>
          </div>
          <S.ProcessIcon icon={faChevronRight} />
          <div>
            <S.ProcessTitle>배송완료</S.ProcessTitle>
            <S.ProcessText>0</S.ProcessText>
          </div>
          <S.ProcessIcon icon={faChevronRight} />
          <div>
            <S.ProcessTitle>구매확정</S.ProcessTitle>
            <S.ProcessText>0</S.ProcessText>
          </div>
        </S.ProcessWrap>
      </T.SectionWrap>
      <T.SectionWrap>
        <T.ProductWrap>
          <T.TableWrap>
            <thead>
              <tr>
                <T.TableTab>주문일자</T.TableTab>
                <T.TableTab>상품</T.TableTab>
                <T.TableTab>수량</T.TableTab>
                <T.TableTab>주문금액</T.TableTab>
                <T.TableTab>상태</T.TableTab>
              </tr>
            </thead>
            <T.TableBody>
              <T.TableRow>
                <td>
                  <T.ItemBox className="column">
                    <p>2023. 11. 11</p>
                    <T.ItemTextButton>상세보기</T.ItemTextButton>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox>
                    <T.ItemInfoWrap>
                      <T.ItemImg />
                      <T.ItemInfoBox>
                        <p>파우더키스 립스틱</p>
                        <T.ItemOption>옵션 | 저스트 큐리어스</T.ItemOption>
                      </T.ItemInfoBox>
                    </T.ItemInfoWrap>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStrongText>1개</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStrongText>100,000 P</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStatus>결제완료</T.ItemStatus>
                    <T.ItemButtonBox>
                      <ButtonHeight30px
                        content="리뷰작성"
                        color="#666"
                        background="transparent"
                        border="1px solid #aaa"
                      />
                    </T.ItemButtonBox>
                  </T.ItemBox>
                </td>
              </T.TableRow>
            </T.TableBody>
            <T.TableBody>
              <T.TableRow>
                <td rowSpan={2}>
                  <T.ItemBox className="column">
                    <p>2023. 11. 11</p>
                    <T.ItemTextButton>상세보기</T.ItemTextButton>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox>
                    <T.ItemInfoWrap>
                      <T.ItemImg />
                      <T.ItemInfoBox>
                        <p>파우더키스 립스틱</p>
                        <T.ItemOption>옵션 | 저스트 큐리어스</T.ItemOption>
                      </T.ItemInfoBox>
                    </T.ItemInfoWrap>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStrongText>1개</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStrongText>100,000 P</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStatus>결제완료</T.ItemStatus>
                    <T.ItemButtonBox>
                      <ButtonHeight30px
                        content="리뷰작성"
                        color="#666"
                        background="transparent"
                        border="1px solid #aaa"
                      />
                    </T.ItemButtonBox>
                  </T.ItemBox>
                </td>
              </T.TableRow>
              <T.TableRow>
                <td>
                  <T.ItemBox>
                    <T.ItemInfoWrap>
                      <T.ItemImg />
                      <T.ItemInfoBox>
                        <p>러스터글래스 립스틱</p>
                        <T.ItemOption>옵션 | 저스트 큐리어스</T.ItemOption>
                      </T.ItemInfoBox>
                    </T.ItemInfoWrap>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStrongText>1개</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStrongText>100,000 P</T.ItemStrongText>
                  </T.ItemBox>
                </td>
                <td>
                  <T.ItemBox className="column">
                    <T.ItemStatus>결제완료</T.ItemStatus>
                    <T.ItemButtonBox>
                      <ButtonHeight30px
                        content="리뷰작성"
                        color="#666"
                        background="transparent"
                        border="1px solid #aaa"
                      />
                    </T.ItemButtonBox>
                  </T.ItemBox>
                </td>
              </T.TableRow>
            </T.TableBody>
          </T.TableWrap>
        </T.ProductWrap>
      </T.SectionWrap>
    </WrapperWidth800px>
  );
}
