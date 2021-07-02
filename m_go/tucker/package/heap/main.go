package main

import (
	"package/dataStruct"
)

func main() {
	h := &dataStruct.Heap{}

	h.Push(9)
	h.Push(8)
	h.Push(7)
	h.Push(6)
	h.Push(5)

	h.Print()
	// [9 8 7 6 5]
}
