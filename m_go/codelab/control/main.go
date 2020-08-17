//5. 흐름제어
//if, switch, for

package main

import "fmt"

func main() {
	var ok bool = true

	//if 문
	if ok {
		fmt.Println("hello")
	}

	var num int = 0

	if num != 0 {
		fmt.Println("world")
	}

	//if 문에서 선언과 동시에 사용할수있다
	if str := "hello world"; str == "HelloWorld" {
		fmt.Println(str)
	} else {
		fmt.Println("else", str)
	}
	//다른곳에서는 str 사용불가

	// if n, err := bytes.NewBuffer(nil).Read(); err != nil {}
	// 에러값만 선언할때 많이 사용함

	//swtich => break 필요없음
	//기본 break가 있음 (fallthrough사용해야 break)
	str := "hello"
	switch str {
	case "hello":
		fmt.Println("123")
	case "world":
		fmt.Println("456")
	default:
		fmt.Println("default")
	}
	fmt.Println(str)

	//while 없음
	//for true = while

	//for문
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// j := 0
	// for j < 3 {
	// 	fmt.Println(j)
	// }
	//모두 생략할때 무한루프

}
