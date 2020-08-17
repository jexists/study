//3. 타입 알아보기
package main

import "fmt"

func main() {
	var intType int = 10
	fmt.Printf("%v %T\n", intType, intType) //10 int

	var float32Type float32 = 3.14
	fmt.Printf("%v %T\n", float32Type, float32Type) //3.14 float32

	fmt.Println(intType + int(float32Type)) //형변환 후 13

	var stringType string = "Hello"
	fmt.Printf("%v %T\n", stringType, stringType) //Hello string

	var intpType *int
	fmt.Printf("%v %T\n", intpType, intpType) //<nil> *int

	intpType = &intType
	fmt.Println(&intType) //0xc0000b4008
	fmt.Println(intpType) //0xc0000b4008

	*intpType = 100
	fmt.Println(intType) //100
	//포인터는 있지만 연산은 지원 안함

}
