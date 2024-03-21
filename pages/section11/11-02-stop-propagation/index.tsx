import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from 'react';
import CheckBox from './checkbox';

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  //   const mystyles ={
  //     margin : "10px",
  //     padding : "0px"
  //   }
    const ClickAlter = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget as HTMLElement
        alert(`${target.id}님이 작성한 글입니다.`)
    }
    const qqq1 = () => {
        alert("1번클릭")
    }

    const qqq4 = (event:MouseEvent<HTMLSpanElement>) => {
      event.stopPropagation()
      alert("4번클릭")
    }
  
  return (
    <>
      {data?.fetchBoards.map((el: any, index:number) => (
        <div id={el.writer} onClick={qqq1}>
          <CheckBox/>
          <span style={{ margin: "10px" }} onClick={qqq4}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </>
  );
}
