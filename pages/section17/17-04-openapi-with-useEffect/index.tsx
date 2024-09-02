import axios from "axios";
import 나만의페이지 from "../../section01/01-01-example";
import { useEffect, useState } from "react";

export default function RestGetPage():JSX.Element {

  const [dog,setDog] = useState('');

    

    useEffect(()=>{
      const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDog(result.data.message); //사진 주소
      };
      void onClickSync();
    },[])

  return (
    <div>
      <img src={dog}/>
      {/* <button onClick={onClickSync}>REST-API(동기) 요청하기</button> */}
    </div>
  );
}
