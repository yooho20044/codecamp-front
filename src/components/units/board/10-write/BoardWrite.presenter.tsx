import { ChangeEvent, MouseEvent } from 'react';
import { BlueButton, RedInput } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from './BoardWrite.types';




export default function BoardWriteUI(props:IBoardWriteUIProps) {
  return (
    <div>
      작성자 :
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목 :
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용 :
      <input
        type="text"
        onChange={props.onChangeContent}
        defaultValue={props.data?.fetchBoard.contents}
      />
      <br />
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </div>
  );
}
