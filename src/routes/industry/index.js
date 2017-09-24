import React from 'react'
import PropTypes from 'prop-types'
import {
    connect
} from 'dva'
import {
    Tabs
} from 'antd'
import {
    routerRedux
} from 'dva/router'

const Industry = ({
    industry,
    dispatch,
    loading,
    location
}) => {
    const {
        list,
        pagination
    } = industry
    const {
        query = {}, pathname
    } = location

    const listProps = {
        pagination,
        dataSource: list,
        loading: loading.effects['industry/query'],
        onChange(page) {
            dispatch(routerRedux.push({
                pathname,
                query: {
                    ...query,
                    page: page.current,
                    pageSize: page.pageSize,
                },
            }))
        },
    }
    const handleTabClick = (key) => {
        dispatch(routerRedux.push({
            pathname,
            query: {
                status: key,
            },
        }))
    }


    return (<div className="content-inner">
        {console.log(list)}
  </div>)
}

Industry.propTypes = {
    industry: PropTypes.object,
    loading: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
}

export default connect(({
    industry,
    loading
}) => ({
    industry,
    loading
}))(Industry)