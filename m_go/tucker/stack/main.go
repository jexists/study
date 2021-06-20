package main

import "fmt"

func main() {
	stack := []int{}

	for i := 1; i <= 5; i++ {
		stack = append(stack, i)
	}

	fmt.Println(stack) //[1 2 3 4 5]

	for len(stack) > 0 {
		var last int
		last, stack = stack[len(stack)-1], stack[:len(stack)-1]
		fmt.Println(last) // 5 4 3 2 1
	}
}
