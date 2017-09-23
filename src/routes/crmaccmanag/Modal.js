import React from 'react'
import PropTypes from 'prop-types'
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
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.customerId,
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
      <Form layout="horizontal">
        <FormItem label="公司信息" hasFeedback {...formItemLayout}>
          {getFieldDecorator('companyName', {
            initialValue: item.companyName,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="行业" hasFeedback {...formItemLayout}>
          {getFieldDecorator('industryName', {
            initialValue: item.industryName,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="联系人" hasFeedback {...formItemLayout}>
          {getFieldDecorator('contactor', {
      initialValue: item.contactor,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="联系人邮箱" hasFeedback {...formItemLayout}>
          {getFieldDecorator('contatorEmail', {
            initialValue: item.contatorEmail,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: 'The input is not valid E-mail!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="联系人电话" hasFeedback {...formItemLayout}>
          {getFieldDecorator('contactPhone', {
            initialValue: item.contactPhone,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: 'The input is not valid phone!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="创建时间" hasFeedback {...formItemLayout}>
          {getFieldDecorator('createTime', {
            initialValue: item.createTime,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="有效期" hasFeedback {...formItemLayout}>
          {getFieldDecorator('validPeriod', {
            initialValue: item.validPeriod,
            rules: [
              {
                required: true,
              },
            ],
          })(<RangePicker />)}
        </FormItem>
        <FormItem label="员工限制" hasFeedback {...formItemLayout}>
          {getFieldDecorator('limitAcctNum', {
            initialValue: item.limitAcctNum,
            rules: [
              {
                required: true,
                type: 'number',
              },
            ],
          })(<InputNumber min={1} max={500}  />)}
        </FormItem>
        <FormItem label="状态" hasFeedback {...formItemLayout}>
          {getFieldDecorator('status', {
            initialValue: item.status,
            rules: [
              {
                required: true,
                type: 'boolean',
              },
            ],
          })(
            <Radio.Group>
              <Radio value>可用</Radio>
              <Radio value={false}>不可用</Radio>
            </Radio.Group>
          )}
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