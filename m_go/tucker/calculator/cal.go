package main

import "fmt"

func main() {
	//선언
	var a int //정수
	var b int

	//대입
	a = 3
	// a = 3.14 //float ERROR
	// a = "abc" //string ERROR
	b = 4

	fmt.Println(a + b) //7
}
