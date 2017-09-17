/**
 * Created by wxy on 2017/9/16.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, DatePicker, Select, Input, Button } from 'antd'
import TreeSelector from './TreeSelector';
import styles from './index.less'

const { RangePicker } = DatePicker;
const { Option } = Select;

const Clue = ({clue, loading}) =>{
  const { list, page } = clue
  console.log(clue)
  console.log(list);
  console.log(page);



  const onChange = (date, dateString) =>{
    console.log(date, dateString);
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }
  const treeSelectPrpps = {
    onChangeItem(value){
      console.log(value);
    }
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
          <TreeSelector  {...treeSelectPrpps}/>
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
  loading: PropTypes.object,
}

export default connect(({ clue, loading }) => ({ clue, loading }))(Clue)
