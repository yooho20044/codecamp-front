import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <div>
      <div>############ 여기는 프리젠터 입니다. ############</div>
      작성자 : <RedInput type="text" onChange={props.cw} />
      제목 : <input type="text" onChange={props.ct} />
      내용 : <input type="text" onChange={props.cc} />
      <BlueButton onClick={props.cs}>GRAPHQL-API 요청하기</BlueButton>
      <div>############ 여기는 프리젠터 입니다. ############</div>
    </div>
  );
}

export const apple = "3333";
