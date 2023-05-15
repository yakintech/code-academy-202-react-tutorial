import { Form, Input } from 'antd';
import React from 'react'

function AddProductPage() {

  const onFinish = (values) => {
    console.log('Values', values);
  }


  return (<>

    <Form
      name='basic'
      initialValues={{ namee: '', unitPrice: 0, unitsInStock: 0 }}
      onFinish={onFinish}
    >

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>


    </Form>

  </>
  )
}

export default AddProductPage