import styled from "@emotion/styled";

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Aside = styled.aside``;
export const Article = styled.article`
    width: calc(100% - 150px);
    max-width: 740px;
`;
export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
`;
export const NavBox = styled.ul`
  margin-top: 40px;
`;
export const NavList = styled.li`
  margin-top: 30px;
  &:first-of-type {
    margin-top: 0;
  }
`;
export const NavItem = styled.a`
  display: block;
  color: #aaa;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #111;
  }
`;
export const UserWrap = styled.div`
  padding: 20px;
  display: flex;
  background-color: #111;

  &.border {
    border: 2px solid #111;
    background: transparent;
  }

  & div:last-of-type {
    margin-left: 60px;
  }
`;
export const UserBox = styled.div``;
export const UserGrade = styled.span`
  display: block;
  font-size: 2.4rem;
  color: #f6b5d1;
  font-weight: 600;
`;
export const UserText = styled.p`
  font-size: 2.4rem;
  color: #fff;
  font-weight: 600;
  margin-left: 20px;
`;
export const UserCategory = styled.span`
  display: block;
  font-size: 1.8rem;
  color: #666;
  font-weight: 500;
`;
export const UserStrong = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-left: 20px;
`;
export const UserSubText = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 6px;
`;
