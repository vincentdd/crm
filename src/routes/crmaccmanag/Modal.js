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
                    key: item.key,
                }
                // console.log(data.indate);
                // data.indate.map((currentValue) => {
                //     debugger;
                //     return currentValue.toLocaleString().substr(0, 10);
                // });
                // data.date = 0;
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
        <FormItem label="Title" hasFeedback {...formItemLayout}>
          {getFieldDecorator('title', {
            initialValue: item.title,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Industry" hasFeedback {...formItemLayout}>
          {getFieldDecorator('industry', {
            initialValue: item.industry,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Name" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
      initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="E-mail" hasFeedback {...formItemLayout}>
          {getFieldDecorator('mail', {
            initialValue: item.mail,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: 'The input is not valid E-mail!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Phone" hasFeedback {...formItemLayout}>
          {getFieldDecorator('tel', {
            initialValue: item.tel,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: 'The input is not valid phone!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="indate" hasFeedback {...formItemLayout}>
          {getFieldDecorator('indate', {
            initialValue: item.indate,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="limit" hasFeedback {...formItemLayout}>
          {getFieldDecorator('limit', {
            initialValue: item.limit,
            rules: [
              {
                required: true,
                type: 'number',
              },
            ],
          })(<InputNumber min={1} max={500}  />)}
        </FormItem>
        <FormItem label="state" hasFeedback {...formItemLayout}>
          {getFieldDecorator('state', {
            initialValue: item.state,
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