interface Props {
    children: JSX.Element | JSX.Element[];
}
function Wrapper({children}: Props) {
    return (<div className="wrapper">{children}</div>)
}

export default Wrapper;
