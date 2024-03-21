import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  나의그래프큐엘셋팅,
  updateBoard,
  UPDATE_BOARD,
} from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import { useRouter } from "next/router";
//import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져오기
// import sdkfjsldfklsdaf from "../write/BoardWrite.presenter"; // export default로 이름 바꿔서 가져오기
// import sdkfjsldfklsdaf, { apple } from "../write/BoardWrite.presenter"; // export default와 export 함께 가져오기
// import * as qqq from "../write/BoardWrite.styles"; //export 한방에 다 가져오기
// qqq.BlueButton; //export 한방에 다 가져오기
// qqq.RedInput; //export 한방에 다 가져오기

export default function BoardWrite(props) {
  const router = useRouter();

  const [myFunc] = useMutation(나의그래프큐엘셋팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);
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
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        //variables 이게 $ 역할을 함
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: content,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = () => {
    setContent(event.target.value);
  };

  return (
    <>
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
      />
    </>
  );
}
