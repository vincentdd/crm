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
        key: item.accountId,
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
        modalOpts.modalType == 'create' ? '': <FormItem label="员工编号" hasFeedback {...formItemLayout}>
            {getFieldDecorator('accountNo', {
              initialValue: item.accountNo,
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
      }
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
              <Radio value={1}>启用</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label="传真" hasFeedback {...formItemLayout}>
          {getFieldDecorator('fax', {
            initialValue: item.fax,
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="部门" hasFeedback {...formItemLayout}>
          {getFieldDecorator('department', {
            initialValue: item.department,
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="职位" hasFeedback {...formItemLayout}>
          {getFieldDecorator('job', {
            initialValue: item.job,
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="生日" hasFeedback {...formItemLayout}>
          {getFieldDecorator('birth', {
            initialValue: item.birth,
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="身份证" hasFeedback {...formItemLayout}>
          {getFieldDecorator('idNo', {
            initialValue: item.idNo,
            rules: [
              {
                required: false,
              },
            ],
          })(<Input />)}
        </FormItem>
        {/*<FormItem label="创建时间" hasFeedback {...formItemLayout}>*/}
          {/*{getFieldDecorator('createTime', {*/}
            {/*initialValue: moment(item.createTime, 'YYYY/MM/DD'),*/}
            {/*rules: [*/}
              {/*{ type: 'object',*/}
                {/*required: true,*/}
                {/*message: '请选择创建时间' }*/}
            {/*],*/}
          {/*})(<DatePicker />)}*/}
        {/*</FormItem>*/}
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
