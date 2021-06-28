package main

import (
	"fmt"
	"package/dataStruct"
)

func main() {
	tree := dataStruct.NewBinaryTree(5)
	tree.Root.AddNode(3)
	tree.Root.AddNode(2)
	tree.Root.AddNode(4)
	tree.Root.AddNode(8)
	tree.Root.AddNode(7)
	tree.Root.AddNode(6)
	tree.Root.AddNode(10)
	tree.Root.AddNode(9)

	tree.Print()
	// 5
	// 3 8
	// 2 4 7 10
	// 6 9 %

	if tree.Search(6) {
		fmt.Println("found 6")
	} else {
		fmt.Println("not found")
	}
	// found 6
}
