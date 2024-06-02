import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import { useState } from "react";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int){
    fetchBoards(page:$page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  const [myIndex, setMyIndex] = useState([false, false, false, false, false, false, false, false, false, false]);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickEdit = (event:MouseEvent<HTMLButtonElement>):void => {
    const qqq = [...myIndex]
    qqq[Number(event.currentTarget.id)] = true
    setMyIndex(qqq);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        !myIndex[index] ? (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button id={String(index)} onClick={onClickEdit}>수정하기</button>
        </div>
        ) : (
          <input type="text" key={el._id}/>
        )
      ))}
    </div>
  );
}
