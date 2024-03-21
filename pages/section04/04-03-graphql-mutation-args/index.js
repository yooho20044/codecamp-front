import { useMutation, gql } from "@apollo/client";

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

  const onClickSubmit = async () => {
    const result = await myFunc({
      variables: {
        //variables 이게 $ 역할을 함
        writer: "후니후니",
        title: "메롱",
        contents: "지금 12시50분",
      },
    });
    console.log(result);
  };

  // 한 줄일때는 괄호() 필요없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
