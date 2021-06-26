package main

import (
	"fmt"
	"package/dataStruct"
)

func main() {
	tree := dataStruct.Tree{}

	val := 1

	tree.AddNode(val)
	val++

	for i := 0; i < 3; i++ {
		tree.Root.AddNode(val)
		val++
	}

	for i := 0; i < len(tree.Root.Childs); i++ {
		for j := 0; j < 2; j++ {
			tree.Root.Childs[i].AddNode(val)
			val++
		}
	}
	tree.DFS1() // 재귀호출
	//1 =>2 =>5 =>6 =>3 =>7 =>8 =>4 =>9 =>10 =>%

	fmt.Println()

	tree.DFS2() // 스택
	// 1 ->2 ->5 ->6 ->3 ->7 ->8 ->4 ->9 ->10 ->%
}
