import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    content: "",
  })
  const [myFunc] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await myFunc({
      variables: {
        //variables 이게 $ 역할을 함
        writer: inputs.writer,
        title: inputs.title,
        contents: inputs.content,
      },
    });
    console.log(result);
  };

  const onChangeInput = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  // const onChangeWriter = (event) => {
    
  //   setInputs({
  //     ...inputs,
  //     event.target.id: event.target.value,
  //   })
  // };
  // const onChangeTitle = (event) => {
  //   setInputs({
  //     ...inputs,
  //     event.target.id: event.target.value,
  //   })
  // };
  // const onChangeContent = (event) => {
  //   setInputs({
  //     ...inputs,
  //     event.target.id: event.target.value,
  //   })
  // };

  // 한 줄일때는 괄호() 필요없음
  return (
    <div>
      작성자 : <input type="text" id="writer" onChange={onChangeInput} />
      제목 : <input type="text" id="title" onChange={onChangeInput} />
      내용 : <input type="text" id="content" onChange={onChangeInput} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
