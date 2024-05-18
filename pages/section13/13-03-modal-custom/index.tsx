import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';

export default function ModalAlertPage(){

    const [isOpen, setIsOpen] = useState(false);

    const showModal = (): void => {
        setIsOpen(true);
    }
    const handleOk = (): void => {
        setIsOpen(false);
    }
    const cancelOk = (): void => {
        setIsOpen(false);
    }



    return (
        <>
            <button onClick={showModal}>모달창 열기!!</button>
            <Modal title="모달 제목" open={isOpen} onOk={handleOk} onCancel={cancelOk}>
                비밀번호 입력: <input type="password"/>
            </Modal>
        </>
    )
}

