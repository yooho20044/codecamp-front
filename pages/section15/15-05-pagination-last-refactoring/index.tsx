import { gql, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs, IQueryFetchBoardsCountArgs } from "../../../src/commons/types/generated/types";
import { useState } from "react";
import Pagination from "../../../src/components/units/15-pagination/Pagination";
import BoardList from "../../../src/components/units/15-pagination/BoardList";


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

const FETCH_BOARD_COUNT = gql`
  query{
    fetchBoardsCount
  }
`

export default function StaticRoutingMovedPage(): JSX.Element {


  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  const {data:dataBoardsCount} = useQuery<Pick<IQuery, "fetchBoardsCount">, IQueryFetchBoardsCountArgs>(FETCH_BOARD_COUNT)
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10)


  return (
    <div>
      <BoardList data={data}/>
      <Pagination refetch ={refetch} lastPage={lastPage}/>
    </div>
  );
}
