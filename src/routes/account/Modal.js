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
        getFieldValue,
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
                    //key: item.key,
                    birth: moment(getFieldValue('birth')).format('YYYY-MM-DD'),
                    status: item.status,
                    id: item.id,
                }
                // console.log(data.indate);
                // data.indate.map((currentValue) => {
                //     debugger;
                //     return currentValue.toLocaleString().substr(0, 10);
                // });
                // data.date = 0;
            console.log(data);
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
        <FormItem label="邮箱" hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: '请输入正确的邮箱',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="传真" hasFeedback {...formItemLayout}>
          {getFieldDecorator('fax', {
            initialValue: item.fax,
            rules: [
              {
                pattern: /^(\d{3,4}-)?\d{7,8}$/,
                message: '请输入正确的传真',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="部门" hasFeedback {...formItemLayout}>
          {getFieldDecorator('department', {
            initialValue: item.department,
            rules: [
              {
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="职位" hasFeedback {...formItemLayout}>
          {getFieldDecorator('job', {
            initialValue: item.job,
            rules: [
              {
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="生日" hasFeedback {...formItemLayout}>
          {getFieldDecorator('birth', {
            initialValue: item.birth === undefined?moment(item.birth):moment(),
            rules: [
              { type: 'object',
              },
            ],
          })(<DatePicker />)}
        </FormItem>
        <FormItem label="身份证号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('idNo', {
            rules: [
              {              },
            ],
          })(<Input />)}
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
              <Radio value={2}>不可用</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label="分配行业" hasFeedback {...formItemLayout}>
          {getFieldDecorator('industryNames', {
            rules: [
              {              },
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