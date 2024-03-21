import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent  } from "react";
import {
  나의그래프큐엘셋팅,
  UPDATE_BOARD,
} from "./BoardWrite.queries"; //export는 골라서 가져오기 가능
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyvariables } from './BoardWrite.types';
//import BoardWriteUI from "./BoardWrite.presenter"; //export default로 한개만 가져오기
// import sdkfjsldfklsdaf from "../write/BoardWrite.presenter"; // export default로 이름 바꿔서 가져오기
// import sdkfjsldfklsdaf, { apple } from "../write/BoardWrite.presenter"; // export default와 export 함께 가져오기
// import * as qqq from "../write/BoardWrite.styles"; //export 한방에 다 가져오기
// qqq.BlueButton; //export 한방에 다 가져오기
// qqq.RedInput; //export 한방에 다 가져오기



export default function BoardWrite(props:IBoardWriteProps) {
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
    router.push(
      `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
    );
  };

  const onClickUpdate = async () => {

    const myvariables: IMyvariables = {
      number: Number(router.query.number),
    };
    if (title) myvariables.title = title;
    if (writer) myvariables.writer = writer;
    if (content) myvariables.contents = content;
    const result = await updateBoard({
      variables: myvariables,
    });
    console.log(result);
    router.push(
      `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
    );
  };

  const onChangeWriter = (event:ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event:ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event:ChangeEvent<HTMLInputElement>) => {
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
        data={props.data} //undefined이거나, data 이거나 둘 중 하나!
      />
    </>
  );
}
