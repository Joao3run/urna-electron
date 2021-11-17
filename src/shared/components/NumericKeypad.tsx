import Button from "./Button";

interface Props {
    changeDisplayNumber: (number: string) => void;
}
function NumericKeypad({changeDisplayNumber}: Props) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return <div className="numeric-keypad">
        {numbers.map((number) => (
            <Button key={number} label={number} size="small" onClick={() => changeDisplayNumber(String(number))}/>
        ))}
    </div>
}

export default NumericKeypad;
