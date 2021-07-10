package main

type Key struct {
	v int
}

type Value struct {
	v int
}

func main() {
	var m map[string]string
	var m1 map[int]string
	var m2 map[Key]Value
	var m3 map[Key]*Value
}
