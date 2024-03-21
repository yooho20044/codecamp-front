import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
//import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져오기
// import sdkfjsldfklsdaf from "../write/BoardWrite.presenter"; // export default로 이름 바꿔서 가져오기
// import sdkfjsldfklsdaf, { apple } from "../write/BoardWrite.presenter"; // export default와 export 함께 가져오기
// import * as qqq from "../write/BoardWrite.styles"; //export 한방에 다 가져오기
// qqq.BlueButton; //export 한방에 다 가져오기
// qqq.RedInput; //export 한방에 다 가져오기

export default function BoardWrite() {
  const [isActive, setIsActive] = useState(false);

  const [myFunc] = useMutation(나의그래프큐엘셋팅);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onClickSubmit = async () => {
    const result = await myFunc({
      variables: {
        //variables 이게 $ 역할을 함
        writer: writer,
        title: title,
        contents: content,
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && content) {
      setIsActive(true);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && content) {
      setIsActive(true);
    }
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (writer && title && event.target.value) {
      setIsActive(true);
    }
  };

  return (
    <>
      <div>############ 여기는 컨테이너 입니다. ############</div>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        isActive={isActive}
      />
      <div>############ 여기는 컨테이너 입니다. ############</div>
    </>
  );
}
