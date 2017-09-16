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
        <FormItem label="员工编号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('accountNo', {
            initialValue: item.accountNo,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="姓名" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="手机" hasFeedback {...formItemLayout}>
          {getFieldDecorator('account', {
      initialValue: item.account,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: 'The input is not valid phone!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="电话" hasFeedback {...formItemLayout}>
          {getFieldDecorator('contactPhone', {
            initialValue: item.contactPhone,
            rules: [
              {
                required: true,
                type: 'number',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="部门" hasFeedback {...formItemLayout}>
          {getFieldDecorator('department', {
            initialValue: item.department,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="职位" hasFeedback {...formItemLayout}>
          {getFieldDecorator('job', {
            initialValue: item.job,
            rules: [
              {
                required: true,
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
        <FormItem label="负责行业" hasFeedback {...formItemLayout}>
          {getFieldDecorator('industryNames', {
            initialValue: item.industryNames,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
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