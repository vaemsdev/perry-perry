import React from 'react';
import { Col, Container, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import Modal from 'components/Modal';
import InputBox from 'components/InputBox';
import { OPTIONS } from 'components/constants';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import ProductContainer from 'components/ProductContainer';
import { selectCommon, setToast } from 'features/commonSlice';

import styles from './Appbody.module.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ProductView from 'components/ProductView';

const AppBody = () => {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <ProductContainer />,
      },
      {
        path: '/product',
        element: <ProductView />
      }
    ]
  );

  const select_common = useAppSelector(selectCommon);

  const args = {
    [OPTIONS.TITLE]: 'Add Address',
    [OPTIONS.ACTION]: 'Save Address',
    [OPTIONS.CANCEL]: 'Cancel',
    [OPTIONS.ISOPEN]: select_common.isModalOpen
  }

  const dispatch = useAppDispatch();
  const handleToast = (key) => {
    dispatch(setToast(key))
  }

  const SVG_BG = () => {

    const [width, height] = [window.outerWidth, window.outerHeight];

    return <svg className={styles['body-bg']} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1920" height="1920" preserveAspectRatio="none" viewBox="0 0 1920 1920">
      <g mask="url(&quot;#SvgjsMask1137&quot;)" fill="none">
        <rect width="1920" height="1920" x="0" y="0" fill="rgba(255, 255, 255, 1)"></rect>
        <path d="M 0,78 C 192,199.4 576,662.6 960,685 C 1344,707.4 1728,289 1920,190L1920 1920L0 1920z" fill="#F4F4F4"></path>
        <path d="M 0,1891 C 128,1708.4 384,1056.4 640,978 C 896,899.6 1024,1408.6 1280,1499 C 1536,1589.4 1792,1443.8 1920,1430L1920 1920L0 1920z" fill="rgba(255, 245, 245, 1)"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1137">
          <rect width="1920" height="1920" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  }

  return <div className={`container ${styles['app-body']}`}>
    <RouterProvider router={router} />
    <Modal {...args}>
      <Form>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Apartment/Building</Form.Label>
                <InputBox hint='?' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Landmark</Form.Label>
                <InputBox hint='?' />
              </Form.Group></Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <InputBox hint='?' /> </Form.Group></Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <InputBox hint='?' /> </Form.Group>
            </Col>
          </Row>

        </Container>
      </Form>
    </Modal>
    <div className={styles['toast-container']}>
      <ToastContainer className="p-3" position={'bottom-end'}>
        {select_common.toasts.map(toast => {
          console.log(toast.id)
          return <Toast key={toast.id} className={styles['toast']} onClose={() => handleToast(toast.id)} delay={5000} autohide={toast.autoHide} show={toast.show} bg='success'>
            <Toast.Header closeButton={false}>
              <strong className="me-auto">New Address</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>Address has been added</Toast.Body>
          </Toast>
        })
        }
      </ToastContainer>
    </div>
    {/* <SVG_BG /> */}
  </div>
};

export default AppBody;