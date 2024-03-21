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
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = () => {
    setContent(event.target.value);
  };

  // 한 줄일때는 괄호() 필요없음
  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter} />
      제목 : <input type="text" onChange={onChangeTitle} />
      내용 : <input type="text" onChange={onChangeContent} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  );
}
