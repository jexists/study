package main

import "fmt"

func main() {
	a := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

	b := a[4:8] //[slice 시작하는 index +1:slice 끝나는 index]
	// b := []int{5, 6, 7, 8}

	c := a[4:] //[slice 시작하는 index +1:] 끝나는 것을 생략했을 경우 끝까지 slice

	d := a[:4] //[:slice 끝나는 index] 시작하는 거 생략했을 경우 처음부터 slice

	fmt.Println(b) //[5 6 7 8]
	fmt.Println(c) //[5 6 7 8 9 10]
	fmt.Println(d) //[1 2 3 4]
}
