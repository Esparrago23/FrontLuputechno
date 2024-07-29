import Input from "../atoms/Input";
import Label from "../atoms/Label";

function Field(props) {
    return (
        <div className="text-xs">
            <div>
                <Label text={props.text}></Label>
            </div>
            <div>
                <Input value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder}></Input>
            </div>
        </div>
    );
}

export default Field;
