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
import {
    BuildTree
} from 'components'
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

    const treeProps = {
        dataSource: list,
        loading: loading.effects['industry/query'],
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
        <BuildTree {...treeProps}></BuildTree>
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