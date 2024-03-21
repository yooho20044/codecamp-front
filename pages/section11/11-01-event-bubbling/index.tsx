import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from 'react';

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
    const qqq = () => {
        alert("클릭 타이틀")
    }
  
  return (
    <>
      {data?.fetchBoards.map((el: any, index:number) => (
        <div id={el.writer} onClick={ClickAlter}>
          <span>
            <input key={index} type="checkbox"></input>
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </>
  );
}
