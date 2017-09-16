/**
 * Created by wxy on 2017/9/16.
 */
import {
  parse
} from 'qs'
import modelExtend from 'dva-model-extend'
import {
  query
} from 'services/clue'
import {
  pageSizeModel
} from 'models/common'

export default modelExtend(pageSizeModel, {
  namespace: 'clue',

  state: {
    list: [],
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      history.listen(({
        pathname
      }) => {
        if (pathname === '/clue') {
          dispatch({
            type: 'query'
          })
        }
      })
    },
  },
  effects: { * query({
      payload,
    }, {
      call,
      put
    }) {
      const data = yield call(query, parse(payload))
      console.log(data);
      yield put({
        type: 'querySuccess',
        payload: {
          list: data.dataList,
          page: {...data.page
          },
        },
      })
    },
  },
})