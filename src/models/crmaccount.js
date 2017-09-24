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
  detail,
  create,
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
      history.listen((location) => {
        if (location.pathname === '/crmaccount') {
          dispatch({
            type: 'query',
            payload: location.query,
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
      console.log(payload);
      const param = {pageNo: payload.page || 1}
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
    * create({
      payload,
    }, {
      call,
      put
    }) {
      payload.accountId = 0;
      const data = yield call(create, payload);
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
