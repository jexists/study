package dataStruct

import "fmt"

type TreeNode struct {
	Val    int
	Childs []*TreeNode
}

type Tree struct {
	Root *TreeNode
}

func (t *TreeNode) AddNode(val int) {
	t.Childs = append(t.Childs, &TreeNode{Val: val})
}

func (t *Tree) AddNode(val int) {
	if t.Root == nil {
		t.Root = &TreeNode{Val: val}
	} else {
		t.Root.Childs = append(t.Root.Childs, &TreeNode{Val: val})
	}
}

func (t *Tree) DFS1() { // 재귀호출
	DFS1(t.Root)
}

func DFS1(node *TreeNode) {
	fmt.Printf("%d =>", node.Val)

	for i := 0; i < len(node.Childs); i++ {
		DFS1(node.Childs[i])
	}
}

func (t *Tree) DFS2() { // 스택
	s := []*TreeNode{}
	s = append(s, t.Root)

	for len(s) > 0 {
		var last *TreeNode
		last, s = s[len(s)-1], s[:len(s)-1]

		fmt.Printf("%d ->", last.Val)

		// for i := 0; i < len(last.Childs); i++ {
		// 	s = append(s, last.Childs[i])
		// }
		// 1->4->10->9->3->8->7->2->6->5->%

		for i := len(last.Childs) - 1; i >= 0; i-- {
			s = append(s, last.Childs[i])
		}

	}
}
