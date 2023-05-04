import ReactDom from "react-dom";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ModalPortal = ({children}: Props) => {
    const el = document.getElementById('modal-root') as HTMLElement

    return ReactDom.createPortal(children, el);
}

export default ModalPortal;