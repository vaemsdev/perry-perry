import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setModal, setToast } from '../../features/commonSlice';
import uuid from 'react-uuid';
import { OPTIONS } from '../constants';
import styles from './Modal.module.scss';

const AppModal = (props) => {

  const dispatch = useDispatch();

  const getValue = (key) => props[key] || `[${key}]`

  const handleModal = () => dispatch(setModal(false));

  const handleAction = () => {
    dispatch(setModal(false));
    dispatch(setToast({
      id: uuid(),
      title: 'test',
      autoHide: true,
      show: true,
      message: 'body messag'
    }));
  };

  return <>
    <Modal show={props[OPTIONS.ISOPEN]} onHide={() => handleModal}>
      <Modal.Header closeButton>
        <Modal.Title>{getValue(OPTIONS.TITLE)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleModal(false)}>
          {getValue(OPTIONS.CANCEL)}
        </Button>
        <Button variant="primary" onClick={() => handleAction()}>
          {getValue(OPTIONS.ACTION)}
        </Button>
      </Modal.Footer>
    </Modal>
  </>
};

export default AppModal;