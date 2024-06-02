import { useState } from "react";
import type { MouseEvent } from "react";

export default function Pagination (props) {

    const [startPage, setStartPage] = useState(1);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>):void => {
        void props.refetch({ page: Number(event.currentTarget.id)})
    }

    const onClickPrevPage = ():void => {
        if(startPage ===1) return;
        setStartPage(startPage - 10)
        void props.refetch({page: startPage})
      }
      
      const onClickNextPage = ():void => {
        if(startPage + 10 <= props.lastPage){ 
        setStartPage(startPage + 10)
        void props.refetch({ page:  startPage})
      }}

    return(
        <>
          <span onClick={onClickPrevPage}>이전페이지</span>
    {
        new Array(10).fill(1).map((_, index) => { 
          return(
            index + startPage <= props.lastPage && 
            <span key={index+ startPage} id={String(index+startPage)} onClick={onClickPage}>
              {index+startPage}
            </span>
          )
        })
      }

      <span onClick={onClickNextPage}>다음페이지</span>
        </>
    )
}