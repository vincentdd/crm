import React from 'react'
import PropTypes from 'prop-types'
import {
	Input
} from 'antd';
import {
	Tree
} from 'antd';
const TreeNode = Tree.TreeNode;

const EditTreeNode = (
	props
) => {
	return (
		<div {...props}>
			<TreeNode title={this.props.nodeName} ></TreeNode>
			<Input style={{dispaly: 'none'}}></Input>
		</div>
	)
}