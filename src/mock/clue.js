/**
 * Created by wxy on 2017/9/16.
 */

const config = require('../utils/config')

const { apiPrefix } = config

const clue = {
  dataList: [
    {
      cludId: 1, //线索id
      transferStatus: 1, //提取状态
      clueName: '医疗美容',
      domain: 'www.baidu.com',
      description: '李敖大师大师完全恶趣味',
      createTime: '2007-06-18',
    }, {
      cludId: 2, //线索id
      transferStatus: 1, //提取状态
      clueName: '医疗美容',
      domain: 'www.asd.com',
      description: '李敖大师大师完全恶趣味',
      createTime: '2007-06-18',
    }, {
      cludId: 3, //线索id
      transferStatus: 1, //提取状态
      clueName: '医疗美容',
      domain: 'www.qe.com',
      description: '李敖大师大师完全恶趣味',
      createTime: '2007-06-18',
    }, {
      cludId: 4, //线索id
      transferStatus: 1, //提取状态
      clueName: '医疗美容',
      domain: 'www.baidu.com',
      description: '李敖大师大师完全恶趣味',
      createTime: '2007-06-18',
    },
    {
      cludId: 5, //线索id
      transferStatus: 1, //提取状态
      clueName: 'aa',
      domain: 'www.asd.com',
      description: '李敖大师大师完全恶趣味',
      createTime: '2007-06-18',
    },
    {
      cludId: 6, //线索id
      transferStatus: 1, //提取状态
      clueName: 'rewr',
      domain: 'www.baidu.com',
      description: '李敖大师大师完全恶趣味',
      createTime: '2007-06-18',
    },
  ],
  page:{
    currentPage: 1,
    totalPage: 15,
    totalCount: 99,
    pageSize: 10,
  }
}

module.exports = {
  [`GET ${apiPrefix}/clue`] (req, res) {
    res.status(200).json(clue)
  },
}

