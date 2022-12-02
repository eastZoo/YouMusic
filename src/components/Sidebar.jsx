import React, { useContext } from "react";
import styled,{ css } from "styled-components";
import { SaveFilled, CaretUpFilled, CaretDownFilled,DeleteFilled, YoutubeFilled ,FacebookFilled    } from "@ant-design/icons";
import PostContext from "../store/post";

const SideWrapper = styled.div`
  background: #0f0f0f;
  max-width: 800px;
`;

const Inner = styled.div`
  width: 420px;
  background-color: #222;
  border-radius: 20px;
  @media screen and (max-width: 960px)  {
    margin-top: 30px;
    width: 850px;
  }
`;

const Header = styled.div`
  position: relative;
  height: 100px;
  background-color: #141414;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const GridWrapper = styled.div`
  height: 500px;
  overflow: auto;
`;

const SaveBtn = styled.div`
  text-align: right;
`;

const Title = styled.div`
  font-size: 35px;
  text-align: center;
  padding: 24px;
`;

const EditListOne = styled.div`
  margin-top: 4px;
  border-top: solid #777 1px;
  padding-top: 6px;
  display: grid;
  grid-template-columns: 20px 1fr 3fr 20px;
  gap: 10px;
  @media screen and (max-width: 960px)  {
    height: 150px;
  }
`;
// IMG BUTTON
const Button = styled.div`
  cursor: pointer;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
`;
const AuthorInfo = styled.div`
  padding-right: 5px;
  align-self: flex-end;
  text-align: right;
  font-size: 0.7rem;
  transform: skew(170deg);
`;

const Sidebar = ({ windowSize }) => {
  const { playList, setPlayList } = useContext(PostContext);

  // const saveList = () => {
  //   window.localStorage.setItem('liston', JSON.stringify(playList));
  // }
  console.log(windowSize);
  return (
    <SideWrapper >
      <Inner>
        <Header>
          <Title>MY MUSIC</Title>
          <SaveBtn>
            플레이 리스트 저장하기
            <SaveFilled />
          </SaveBtn>
        </Header>
        <GridWrapper>
          {playList.map(
                ({ title, author, provider, url, thumbnail }, index) => (
                  <EditListOne>
                    {/* 사이드바 리스트 업다운버튼 */}
                    <FlexColumn>
                      <Button>
                        <CaretUpFilled
                          size="20"
                          color={index === 0 ? "#555" : ""}
                          onClick={() => {
                            if (index !== 0) {
                              const temp = playList[index - 1];
                              playList[index - 1] = playList[index];
                              playList[index] = temp;
                              setPlayList(playList.slice());
                            }
                          }}
                        />
                      </Button>
                      <Button>
                        <CaretDownFilled
                          size="20"
                          color={index === playList.length - 1 ? "#555" : ""}
                          onClick={() => {
                            if (index !== playList.length - 1) {
                              const temp = playList[index + 1];
                              playList[index + 1] = playList[index];
                              playList[index] = temp;
                              setPlayList(playList.slice());
                            }
                          }}
                        />
                      </Button>
                    </FlexColumn>
                    {/* 썸네일 그림 */}
                    <div>
                      <img
                        src={thumbnail}
                        alt={title}
                        width="100%"
                        height="auto"
                      />
                    </div>
                    {/* 타이틀 author */}
                    <FlexColumn>
                      <Flex>
                        {title}
                      </Flex>
                      <AuthorInfo>
                        {provider === "YouTube" ? <YoutubeFilled size="14" /> : null}
                        &nbsp;{author}
                      </AuthorInfo>
                    </FlexColumn>
                    {/* 삭제버튼 */}
                    <FlexColumn>
                      <Button>
                        <DeleteFilled
                          size="20"
                          onClick={() => {
                            playList.splice(index, 1);
                            setPlayList(playList.slice());
                          }}
                        />
                      </Button>
                    </FlexColumn>
                  </EditListOne>
                )
              )}
        </GridWrapper>
      </Inner>
    </SideWrapper>
  );
};

export default Sidebar;
