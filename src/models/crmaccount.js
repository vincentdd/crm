/**
 * Created by wxy on 2017/9/24.
 */
import {
  parse
} from 'qs'
import modelExtend from 'dva-model-extend'
import {
  query,
  update,
  update_status,
} from 'services/crmaccount'
import {
  pageSizeModel
} from 'models/common'

export default modelExtend(pageSizeModel, {
  namespace: 'crmaccount',

  state: {
    list: [],
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    isMotion: true,
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      history.listen(({
        pathname
      }) => {
        if (pathname === '/crmaccount') {
          dispatch({
            type: 'query'
          })
        }
      })
    },
  },
  effects: {
    * query({
      payload,
    }, {
      call,
      put
    }) {
      const param = {pageNo: 1}
      const data = yield call(query, param)
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
    * update({
      payload,
    }, {
      call,
      put
    }) {
      const data = yield call(update, payload);
      console.log('updateSuccess-------------------------'+ data);
    },
    * updateSatatus({payload}, {call, put}) {
      const data = yield call(update_status, payload);
      console.log('updateSuccess-------------------------');
      console.log(data);
      yield put({
        type: 'query',
      })
    },
  },
  reducers: {

    showModal(state, {
      payload
    }) {
      return {...state,
        ...payload,
        modalVisible: true
      }
    },
    hideModal(state) {
      return {...state,
        modalVisible: false
      }
    },

  },
})
