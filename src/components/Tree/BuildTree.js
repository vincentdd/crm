import React from 'react'
import PropTypes from 'prop-types'
import EditTreeNode from 'TreeNode'
import {
	Tree,
	Input
} from 'antd';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

class BuildTree extends React.Component {
	constructor(props) {
			super(props)
			const {
				list,
			} = props
			// this.state = {
			// 	loading: false,
			// 	dataSource,
			// 	fetchData: {},	
			// 	pagination,
			// }
		}
		// const dataList = {};
	getKey(parentKey, index) {
		if (parentKey == undefined)
			return index;
		else
			return `${parentKey}-${index}`;
	}
	renderTreeNodes = (list, parentKey) => {
		return data.map((item, index) => {
			if (item.childFlag) {
				return (
					<TreeNode title={item.nodeName} key={this.getKey(parentKey,index)} dataRef={item}>
				{
					this.renderTreeNodes(item.children,item.key)
				}
          </TreeNode>
				);
			}
			return <TreeNode {...item} />;
		});
	}
	render() {
		return (
			<div {...props}>
			{this.renderTreeNodes(this.props.list}
			</div>
		)
	}
}