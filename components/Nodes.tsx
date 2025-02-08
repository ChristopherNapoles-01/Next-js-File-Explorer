import Draggable from "./DragAndDrop/Draggable";
import Item from "./Item";

const data = [
    {
        id : 1,
        name : "test1",
        type : "file"

    },
    {
        id : 2,
        name : "test2",
        type: "folder"
    }
]
const Nodes = () => {
    return (
        <div className="flex">
            {
                data.map((d) => (
                    <div className="m-4">
                        <Draggable id={d.id}>
                           <Item data={d}/>
                        </Draggable>
                    </div>
                ))
            }
        </div>
    );
}


export default Nodes;