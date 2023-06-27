import styled from "styled-components";

export const ButtonActiveSearcher = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.isOpen ? "120px" : "200px")};
  width: ${(props) => (props.isOpen ? "120px" : "200px")};
  overflow: hidden;
  border-radius: 100px;
  @media screen and (max-width: 450px) {
    height: ${(props) => (props.isOpen ? "120px" : "150px")};
    width: ${(props) => (props.isOpen ? "120px" : "150px")};
  }
`;
export const SpawnVideoMesseks = styled.video`
  position: absolute;
  height: 100%;
  cursor: pointer;
  left: 0px;
`;
