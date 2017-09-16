/**
 * Created by wxy on 2017/9/16.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, DatePicker, Select, Input, Button, TreeSelect } from 'antd'
import styles from './index.less'

const { RangePicker } = DatePicker;
const { Option } = Select;
const { TreeNode } = TreeSelect;

const Clue = ({dispatch, clue, loading}) =>{
  const { list, page, treeSelectValue } = clue
  console.log(clue)
  console.log(list);
  console.log(page);
  console.log(treeSelectValue);


  const onChange = (date, dateString) =>{
    console.log(date, dateString);
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  const onTreeChange = (value) => {
    console.log(arguments);
    console.log(value)
    dispatch({
      type: 'clue/treeUpdate',
      payload: {
        treeSelectValue: value,
      },
    })
  }


  const clueCards = list.map((item, key) => (<Col className = {styles.clue_card} key={key} span={6}>
    <Card title={item.clueName} >
      <p>产品关键字: {item.clueName}</p>
      <p>行业: {item.clueName}</p>
      <p>标题: {item.clueName}</p>
      <p>域名: {item.domain}</p>
      <p>描述: {item.description}</p>
      <p>导入时间: {item.createTime}</p>
    </Card>
  </Col>))

  return (
    <div style={{padding: '30px' }}>
      <Row className={styles.filter}>
        <Col span={6}><RangePicker className={styles.itemWidth}  onChange={onChange} /></Col>
        <Col span={6}>
          <Select defaultValue="1" onChange={handleChange} className={styles.itemWidth}>
            <Option value="0">未分配</Option>
            <Option value="1">已分配</Option>
          </Select>
        </Col>
      </Row>
      <Row className={styles.filter}>
        <Col span={6}>
          <TreeSelect
            showSearch
            style={{ width: 250 }}
            value={treeSelectValue}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="产品关键字"
            allowClear
            treeDefaultExpandAll
            onChange={onTreeChange}
          >
            <TreeNode value="parent 1" title="服装销售" key="0-1">
              <TreeNode value="parent 1-0" title="服装进出口" key="0-1-1">
                <TreeNode value="leaf1" title="服装进出口贸易" key="random" />
                <TreeNode value="leaf2" title="服装成品定制" key="random1" />
              </TreeNode>
              <TreeNode value="parent 1-1" title="面料加工" key="random2">
                <TreeNode value="sss" title={<b style={{ color: '#08c' }}>绍兴面料加工厂</b>} key="random3" />
              </TreeNode>
            </TreeNode>
          </TreeSelect>
        </Col>
        <Col span={6}>
          <Button type="primary">确认</Button>
          <Button type="normal">重置</Button>
        </Col>
      </Row>
      <Row gutter={16}>
        {clueCards}
      </Row>
    </div>
  )
}

Clue.propTypes = {
  clue: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ clue, loading }) => ({ clue, loading }))(Clue)
