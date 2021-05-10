package main

import "fmt"

// func add(x int, y int) int {
// 	return x + y
// }

// func main() {
// 	for i := 0; i < 10; i++ {
// 		fmt.Printf("%d + %d = %d\n", i, i+2, add(i, i+2))
// 	}
// }

func main() {
	a, b := fun1(2, 3)
	fmt.Println(a, b) //3 2
}

// func fun1(x, y int) (int, int) {
// 	return y, x
// }

func fun1(x, y int) (int, int) {
	fun2(x, y)
	return y, x
}

func fun2(x, y int) {
	fmt.Println("func2", x, y) //func2 2 3
}
