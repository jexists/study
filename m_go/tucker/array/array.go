package main

import "fmt"

func main() {
	//배열 복사
	arr := [5]int{1, 2, 3, 4, 5}
	clone := [5]int{}

	for i := 0; i < 5; i++ {
		clone[i] = arr[i]
	}

	fmt.Println(clone) //[1 2 3 4 5]
}
