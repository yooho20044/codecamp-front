import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode' 

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
    const handleComplete = (data: Address): void => {
        console.log(data);
        setIsOpen(false);
    }


    return (
        <>
            <button onClick={showModal}>모달창 열기!!</button>
            
            {/** 모달 종료방식 - 1. 모달 숨기는 방법 ( ex, 이력서 등 ) */}
            <Modal title="모달 제목" open={isOpen} onOk={handleOk} onCancel={cancelOk}>
                <DaumPostcodeEmbed onComplete={handleComplete}/>
            </Modal>

            {/** 모달 종료방식 - 2. 모달을 삭제하는 방법 (ex, 신용카드,비밀번호 등) */}
            {isOpen && (
            <Modal title="모달 제목" open={true} onOk={handleOk} onCancel={cancelOk}>
                <DaumPostcodeEmbed onComplete={handleComplete}/>
            </Modal>
            )}
            
        </>
    )
}

