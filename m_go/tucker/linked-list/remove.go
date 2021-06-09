package main

import "fmt"

type Node struct {
	next *Node
	val  int
}

func main() {
	var root *Node
	var tail *Node

	root = &Node{val: 0}
	tail = root

	for i := 1; i < 10; i++ {
		tail = AddNode(tail, i)
	}

	PrintNodes(root)
	// 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

	RemoveNode(root)

	PrintNodes(root)
	// 0 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

}

func AddNode(tail *Node, val int) *Node {
	node := &Node{val: val}
	tail.next = node

	return node
}

func RemoveNode(prev *Node) {
	prev.next = prev.next.next
}

func PrintNodes(root *Node) {
	node := root
	for node.next != nil {
		fmt.Printf("%d -> ", node.val)
		node = node.next
	}
	fmt.Printf("%d \n", node.val)
}
