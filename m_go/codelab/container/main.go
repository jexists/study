package main

import "fmt"

//7. Array, slice, map

func main() {
	// var a [1]int = [1]int{0}
	// fmt.Println(a)
	var arr [5]int //Array 생성시 길이 명시
	fmt.Println(arr[0])
	//값 할당X => zero value 초기화

	var a [2]int = [2]int{1, 2}
	fmt.Println(a[0], a[1], len(a))

	b := [3]int{1, 2}
	fmt.Println(b, len(b))

	//길이 생략 => 빈 길이 만들수 없음
	//[...] 길이 명시 안할수 있음
	c := [...]int{1, 2}
	fmt.Println(c[0], c[1], len(c))

	d := [3]string{"hello", "world"}
	fmt.Println(d, d[2], len(d))
	fmt.Println(d[2] == "") //true

	//slice

	//slice 만드는 방법 (가변 array)
	slice := arr[0:3]
	//arr[시작인덱스(포함):끝인데스(불포함)으로 슬라이싱 가능]
	fmt.Println(slice, len(slice), cap(slice))
	slice[0] = 10
	slice[1] = 20
	slice[2] = 30
	fmt.Println(arr, slice)
	//arr 값도 slice 값과 똑같이 변경

	e := d[1:]
	fmt.Println(e)

	//가변 array
	// make := make([]int, 0)

	f := make([]int, 0, 2)
	//길이:0, 용량 2의 slice 생성
	fmt.Println(f, len(f))

	f = append(f, 10)
	//append 값 추가
	fmt.Println(f, len(f), cap(f))
	f = append(f, 20)
	fmt.Println(f, len(f), cap(f))
	f = append(f, 30)
	//용량 부족 => 새로운 내부 배열 할당
	fmt.Println(f, len(f), cap(f))
	f = append(f, 40)
	fmt.Println(f, len(f), cap(f))
	f = append(f, 50)
	fmt.Println(f, len(f), cap(f))
	//cap => 새로운 배열 할당해서 값이 2배오름 (타입마다 다름)

	g := f[1:3]
	fmt.Println(g, len(g))

	var z []int
	for i := 0; i < 10; i++ {
		z = append(z, i)
	}
	fmt.Println("z", z, len(z), cap(z))

	//map (4:10:33) 시작

	// var map1 map[string]int
	//문
}
