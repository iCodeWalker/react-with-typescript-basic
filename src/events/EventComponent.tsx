import React from "react";

//-- Events can be handled easily if we are habdling it using inline event handlers.
//-- But if we make separate functions for event handling we have to provide the type of event. -- Type annotation
//-- Type inference work with inline event handlers, but not with separate event handlers.

const EventComponent : React.FC = () => {

    //React.ChangeEvent is applicabale only elements that can be changed. Like textinputs, textarea, radiobutton, checkboxes, etc.
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    const onDragStart = (event:React.DragEvent<HTMLDivElement>) => {
        console.log("i'm being drag")
        console.log(event)
    }
    return <div>
        {/* <input onChange={e=>{console.log(e)}} /> */}
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>
            Drag me..
        </div>
    </div>
};

export default EventComponent;