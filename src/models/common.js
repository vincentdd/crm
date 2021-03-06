import modelExtend from 'dva-model-extend'

const model = {
  reducers: {
    updateState(state, {
      payload
    }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const pageModel = modelExtend(model, {

  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `Total ${total} Items`,
      current: 1,
      total: 0,
    },
  },

  reducers: {
    querySuccess(state, {
      payload
    }) {
      const {
        list,
        pagination
      } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },

})

const pageSizeModel = modelExtend(model, {

  state: {
    list: [],
    pagination: {
      current: 0,
      total: 0,
      pageSize: 1,
      totalCount: 0,
    },
  },

  reducers: {
    querySuccess(state, {
      payload
    }) {
      const {
        list,
        page
      } = payload
      console.log(payload);
      return {
        ...state,
        list,
        pagination: {
          current: payload.page.currentPage,
          total: payload.page.totalCount,
          pageSize: payload.page.pageSize,
        },
      }
    },
  },
})


module.exports = {
  model,
  pageModel,
  pageSizeModel,
}