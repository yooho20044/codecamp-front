import BoardWrite from "../../../../src/components/units/board/10-write/BoardWrite.container";

export default function GraphqlMutationPage() {
  // 한 줄일때는 괄호() 필요없음
  return (
    <>
      <BoardWrite isEdit={false} />
    </>
  );
}
