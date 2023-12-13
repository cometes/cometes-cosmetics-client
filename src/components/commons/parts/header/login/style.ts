import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;
export const Logo = styled.a`
  display: block;
  margin-bottom: 30px;
`;
export const LogoImg = styled.img`
  display: block;
  width: 140px;
`;
export const LoginComponentWrap = styled.div`
  width: 300px;
  & div {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
export const LoginComponentBox = styled.div`
  position: relative;
`;
export const JoinBox = styled.div`
  width: 100%;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px dashed #e4e5ed;
  display: flex;
  justify-content: center;
`;
export const JoinText = styled.p`
  color: #424242;
  font-size: 1.4rem;
`;
export const JoinButton = styled.a`
  display: block;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 12px;
`;
export const RecentLoginBox = styled.div`
  position: absolute;
  background: #333;
  padding: 6px 12px;
  border-radius: 6px;
  top: calc(100% - 8px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: #333;
    top: 1px;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    transform: translate(-50%, -50%) rotate(-135deg);
  }
`;
export const RecentLoginText = styled.div`
  color: #fff;
  font-size: 1.2rem;
`;
