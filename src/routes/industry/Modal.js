import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  Cascader,
  DatePicker
} from 'antd';
const {
  RangePicker
} = DatePicker;

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  console.log(item);
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
      }
      onOk(data);
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">{
        modalOpts.modalType == 'create' ? '': <FormItem label="行业ID" hasFeedback {...formItemLayout}>
            {getFieldDecorator('id', {
              initialValue: item.id,
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
      }
        <FormItem label="行业名字" hasFeedback {...formItemLayout}>
          {getFieldDecorator('nodeName', {
            initialValue: item.nodeName,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="上级行业ID" hasFeedback {...formItemLayout}>
          {getFieldDecorator('parentId', {
            initialValue: item.parentId,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="层数" hasFeedback {...formItemLayout}>
          {getFieldDecorator('level', {
            initialValue: item.level,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
