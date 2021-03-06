import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
    FilterItem
} from 'components'
import {
    Form,
    Button,
    Row,
    Col,
    // DatePicker,
    Input,
    Cascader,
    Switch
} from 'antd'

const Search = Input.Search
    // const {
    //     RangePicker
    // } = DatePicker

const ColProps = {
    xs: 24,
    sm: 12,
    style: {
        marginBottom: 16,
    },
}

const TwoColProps = {
    ...ColProps,
    xl: 96,
}

const Filter = ({
    onAdd,
    isMotion,
    switchIsMotion,
    onFilterChange,
    filter,
    form: {
        getFieldDecorator,
        getFieldsValue,
        setFieldsValue,
    },
}) => {
    // const handleFields = (fields) => {
    //     const {
    //         createTime
    //     } = fields
    //     if (createTime.length) {
    //         fields.createTime = [createTime[0].format('YYYY-MM-DD'), createTime[1].format('YYYY-MM-DD')]
    //     }
    //     return fields
    // }

    const handleSubmit = () => {
        let fields = getFieldsValue();
        //fields = handleFields(fields)
        onFilterChange(fields);
    }

    // const handleReset = () => {
    //     const fields = getFieldsValue()
    //     for (let item in fields) {
    //         if ({}.hasOwnProperty.call(fields, item)) {
    //             if (fields[item] instanceof Array) {
    //                 fields[item] = []
    //             } else {
    //                 fields[item] = undefined
    //             }
    //         }
    //     }
    //     setFieldsValue(fields)
    //     handleSubmit()
    // }

    // const handleChange = (key, values) => {
    //     let fields = getFieldsValue()
    //     fields[key] = values
    //     fields = handleFields(fields)
    //     onFilterChange(fields)
    // }
    // const {
    //     name,
    //     address
    // } = filter

    // let initialCreateTime = []
    // if (filter.createTime && filter.createTime[0]) {
    //     initialCreateTime[0] = moment(filter.createTime[0])
    // }
    // if (filter.createTime && filter.createTime[1]) {
    //     initialCreateTime[1] = moment(filter.createTime[1])
    // }

    return (
        <Row gutter={24} type="flex" justify="space-between">
            <Col {...ColProps} xl={{ span: 4 }} md={{ span: 8 }}>
                {getFieldDecorator('content', )(<Search placeholder="请输入公司名称/联系人/邮箱/电话" size="large" onSearch={handleSubmit} />)}
            </Col>
            <Col {...TwoColProps} xl={{ span: 3 }} md={{ span: 3 }}>
                {<Button size="large" type="ghost" onClick={onAdd}>Create</Button>}
            </Col>
        </Row>
    )
}

Filter.propTypes = {
    onAdd: PropTypes.func,
    isMotion: PropTypes.bool,
    switchIsMotion: PropTypes.func,
    form: PropTypes.object,
    filter: PropTypes.object,
    onFilterChange: PropTypes.func,
}

export default Form.create()(Filter)