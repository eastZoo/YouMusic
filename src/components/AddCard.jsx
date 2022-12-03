import { SearchOutlined } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import PostContext from "../store/post";

const Card = styled.div`
  position: relative;
  margin-top: 15px;
  width: 420px;
  height: 225px;
  background-color: #222;
  border-radius: 15px;
  @media all and (max-width: 1536px) {
    width: 350px;
    height: 155px;
  }
`;
const Cap = styled.div`
  height: 60px;
  background-color: #141414;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  text-align: center;
  display: flex;
`;
const InputArea = styled.form`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0 20px;
  flex: 1;
  flex-basis: 1e-9px;
`;
const Input = styled.input`
  align-items: center;
  background-color: #121212;
  border: 1px solid #303030;
  border-right: none;
  color: #ffffffe0;
  display: flex;
  border-radius: 40px 0 0 40px;
  margin-left: 20px;
  padding: 0px 4px 0px 16px;
  height: 35px;
  box-sizing: border-box;
`;
const Button = styled.button`
  border: 1px solid #303030;
  background-color: #ffffff14;
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  height: 35px;
  width: 64px;
`;

const AddInfo = styled.div`
  display: flex;
  margin-top: 5px;
`;

const AddImg = styled.div`
  padding-left: 20px;
  @media all and (max-width: 1536px) {
    width: 75px;
  }
`;
const Img = styled.img`
  width: 130px;
  @media all and (max-width: 1536px) {
    width: 68px;
  }
`;
const AddTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  @media all and (max-width: 1536px) {
    font-size: 13px;
  }
`;
const Add = styled.button`
  width: 350px;
  background-color: #ffffff14;
  border-radius: 20px;
  padding: 7px 0;
  border: 1px solid #303030;
  margin: 5px auto;
  display: block;
  color: #ffffffe0;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #1f1f1f;
  }
`;

const AddCard = () => {
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState("");
  const [isIn, setIsin] = useState(false);

  const { addPlayList } = useContext(PostContext);

  const changeHandler = (e) => {
    setUrl(e.target.value);
    console.log(e.target.value);
  };

  const getUrlInfo = async (address) => {
    const response = await fetch(
      `https://noembed.com/embed?dataType=json&url=${address}`
    )
      .then((response) => response.json())
      .then((data) => setYoutubeInfo(data));
    console.log(response);
  };

  const setYoutubeInfo = (data) => {
    const { author_name, provider_name, thumbnail_url, title, url } = data;
    setInfo({
      title: title,
      author: author_name,
      provider: provider_name,
      thumbnail: thumbnail_url,
      url: url,
    });
    setIsin((prev) => !prev);
  };
  const onClick = (e) => {
    e.preventDefault();
    getUrlInfo(url);
    console.log(info);
  };

  const onPush = () => {
    addPlayList(info);
    console.log(info);
    setInfo({});
    setUrl("");
    setIsin(false);
  };

  return (
    <Card>
      <Cap>
        <InputArea>
          ADD MUSIC
          <Input
            type="text"
            placeholder="공유할 유튜브 Url을 입력해주세요"
            value={url}
            onChange={changeHandler}
          />
          <Button onClick={onClick}>
            <SearchOutlined style={{ fontSize: "24px", color: "#f1f1f1" }} />
          </Button>
        </InputArea>
      </Cap>
      <AddInfo>
        <AddImg>
          <Img src={info.thumbnail} />
        </AddImg>
        <AddTitle>
          <div>{info.title}</div>
          <div>{info.author}</div>
        </AddTitle>
      </AddInfo>
      {isIn === true ? <Add onClick={onPush}>추가</Add> : ""}
    </Card>
  );
};

export default AddCard;
