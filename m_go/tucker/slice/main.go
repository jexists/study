package main

import "fmt"

func main() {
	// 동적배열 vs 정적배열
	// 정적배열: fixed size array (배열의 길이가 변하지 않는)
	// ex) [10]int

	// 동적배열: 길이가 늘어난다. / 실제 배열을 포인트하고 있다.

	// 메모리 할당

	// 동적배열
	// c++ STL vector
	// python slice
	// java Array List
	// C# List
	// go slice

	//1. 빈배열 만드는 방법 var a []int
	//2. 초기값 a := []int{1,2,3,4}
	//3. make 사용 a:= make([]int,3)
	//4. make 사용 with cap a:= make([]int, 0, 8)

	// capicity : 확보해놓은 공간
	// length: 쓰고있는 길이

	// 빈배열 만드는 방법
	var a []int
	fmt.Printf("len(a) = %d\n", len(a)) //0
	fmt.Printf("cap(a) = %d\n", cap(a)) //0

	// 초기값 지정
	b := []int{1, 2, 3, 4, 5}
	fmt.Printf("len(b) = %d\n", len(b)) //5
	fmt.Printf("cap(b) = %d\n", cap(b)) //5

	// make 사용
	c := make([]int, 0, 8)
	fmt.Printf("len(c) = %d\n", len(c)) //0
	fmt.Printf("cap(c) = %d\n", cap(c)) //8

	// append 추가
	c = append(c, 1)
	// slice = append(slice, 추가할 항목)
	// 반환값 => slice (cap여유가 있을 경우는 입력한 slice /  cap자리가 없을 경우 새로운 slice)
	fmt.Printf("len(c) = %d\n", len(c)) //1
	fmt.Printf("cap(c) = %d\n", cap(c)) //8

}
