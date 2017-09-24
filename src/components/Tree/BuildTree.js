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
	renderTreeNodes = (list) => {
		return data.map((item) => {
			if (item.childFlag) {
				return (
					<TreeNode title={item.nodeName} key={item.key} dataRef={item}>
				{
					this.renderTreeNodes(item.children)
				}
          </TreeNode>
				);
			}
			return <TreeNode {...item} />;
		});
	}
	componentWillMount() {}
	render() {
		return (
			<div {...props}>
			<TreeNode title={this.props.nodeName} ></TreeNode>
			<Input style={{dispaly: 'none'}}></Input>
		</div>
		)
	}
}