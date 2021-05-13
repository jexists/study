package main

import "fmt"

func main() {
	// 변수 -> 메모리 주소 (길이)
	// 배열 -> 메모리 주소 (길이: type x 갯수)

	// s := "Hello World"

	s := "Hello 월드"

	for i := 0; i < len(s); i++ {
		// fmt.Print(s[i], ", ")
		// 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, %

		// fmt.Print(string(s[i]), ", ")
		// H, e, l, l, o,  , W, o, r, l, d, %

		fmt.Print(string(s[i]), ", ")
		// H, e, l, l, o,  , ì, , ë, , , %
	}
}
