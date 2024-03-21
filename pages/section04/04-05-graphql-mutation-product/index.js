import { useMutation, gql } from "@apollo/client";

const Create_Product = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    # 변수의 타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [createProduct] = useMutation(Create_Product);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "후니",
        createProductInput: {
          name: "마우스",
          detail: "정말 젛은 마우스",
          price: 30000,
        },
      },
    });
    console.log(result);
  };

  // 한 줄일때는 괄호() 필요없음
  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
