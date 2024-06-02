export default function BoardList(props) {

    return(
        <>
            {props.data?.fetchBoards.map((el) => (
                <div key={el._id}>
                <span style={{ margin: "10px" }}>{el.title}</span>
                <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}
        </>
    )
}