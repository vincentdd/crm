/**
 * Created by wxy on 2017/9/16.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'


const Clue = ({clue, loading}) =>{
  const { list, page } = clue
  console.log(clue)
  console.log(list);
  console.log(page);

  const clueCards = list.map((item, key) => (<Col className = "clue_card" key={key} span={6}>
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
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        {clueCards}
      </Row>
    </div>
  )
}

export default connect(({ clue, loading }) => ({ clue, loading }))(Clue)
