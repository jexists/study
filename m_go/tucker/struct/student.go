package main

import "fmt"

type Student struct {
	name  string
	class int

	grade Grade
}

type Grade struct {
	name  string
	grade string
}

func (s Student) ViewGrade() {
	fmt.Println(s.grade)
}

func ViewGrade(s Student) {
	fmt.Println(s.grade)
}

func main() {

	var s Student
	s.name = "joy"
	s.class = 1

	s.grade.name = "Math"
	s.grade.grade = "C"

	s.ViewGrade() //{Math C}
	ViewGrade(s)  //{Math C}
}
