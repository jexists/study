package main

import "fmt"

func main() {
	fmt.Println("hello world")
	something.sayHello() //대문자 public
	something.sayBye()   //private
}
