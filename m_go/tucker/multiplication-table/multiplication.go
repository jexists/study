package main

func main() {

	for num := 2; num < 10; num++ {
		for num2 := 1; num2 < 10; num2++ {
			println(num, num2, num*num2)
		}
	}
}
