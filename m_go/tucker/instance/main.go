package main

import "fmt"

type Student struct {
	name  string
	age   int
	grade int
}

func main() {
	a := Student{"aaa", 20, 10}

	b := a
	b.age = 30

	// Value type
	fmt.Println(a) // {aaa 20 10}
	fmt.Println(b) // {aaa 30 10}

	c := Student{"aaa", 20, 10}

	var d *Student
	d = &c
	d.age = 30

	// Pointer (reference 타입형태 - 참조)
	fmt.Println(c) // {aaa 30 10}
	fmt.Println(d) // &{aaa 30 10}

}
