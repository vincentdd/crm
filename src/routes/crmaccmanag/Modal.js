import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
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
        getFieldValue
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
                validPeriod: undefined,
                validStartTime: moment(getFieldValue('validPeriod')[0]).format('YYYY-MM-DD'),
                validEndTime: moment(getFieldValue('validPeriod')[1]).format('YYYY-MM-DD')
            }
            console.log(data);
            debugger;
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
                message: '请输入正确的邮箱',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="手机" hasFeedback {...formItemLayout}>
          {getFieldDecorator('mobile', {
            initialValue: item.mobile,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: '请输入正确的手机号码',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="有效期" hasFeedback {...formItemLayout}>
          {getFieldDecorator('validPeriod', {
            initialValue: [moment(item.validStartTime), moment(item.validEndTime)],
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
              },
            ],
          })(
            <Radio.Group>
              <Radio value={1}>可用</Radio>
              <Radio value={0}>不可用</Radio>
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