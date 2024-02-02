import { Modal } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

//scss
import "./style.scss";

const FormModal = ({
    show,
    onClose,
    heading,
    children,
    size,
    className,
    modalClassName,
    subHeading,
    showHeader,
    dialogClassName,
    showClose,
    hideLine,
    headingClassName,
}) => {
    return (
        <Modal
            show={show}
            centered
            onHide={onClose}
            size={size}
            className={modalClassName}
            dialogClassName={dialogClassName}
            backdrop="static"
            backdropClassName="form-modal-backdrop"
        >
            {showHeader ?(
                <Modal.Header>
                    <div className="form-modal">
                        <Modal.Title className={headingClassName}>{heading}</Modal.Title>
                        {subHeading && (
                            <div className="form-modal-sub-title">{subHeading}</div>
                        )}
                    </div>
                    {showClose ?(
                        <CloseButton
                            className={hideLine ? "hideLine" : ""}
                            onClick={() => onClose(false)}
                        />
                    ) : null }
                </Modal.Header>
            ) : null}
            <Modal.Body className={className}>
                <div>{children}</div>
            </Modal.Body>
        </Modal>
    );
};

export default FormModal;