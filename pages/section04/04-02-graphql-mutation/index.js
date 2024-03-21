import { useMutation, gql } from "@apollo/client";

const 나의그래프큐엘셋팅 = gql`
  mutation {
    createBoard(writer: "미미", title: "안녕", contents: "반갑다 ") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myFunc] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    const result = await myFunc();
    console.log(result);
  };

  // 한 줄일때는 괄호() 필요없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
