package main

import "fmt"

type User struct {
	Name  string
	Age   int
	Phone string
}

//7. Array, slice, map

func main() {
	// var a [1]int = [1]int{0}
	// fmt.Println(a)
	var arr [5]int //Array 생성시 길이 명시
	fmt.Println(arr[0])
	//값 할당X => zero value 초기화 ""/0

	var a [2]int = [2]int{1, 2}
	fmt.Println(a[0], a[1], len(a))

	//배열 바로 만드는 방법
	b := [3]int{1, 2}
	fmt.Println(b, len(b))

	//길이 생략 => 빈 길이 만들수 없음
	//[...] 길이 명시 안할수 있음 (생략)
	c := [...]int{1, 2}
	fmt.Println(c[0], c[1], len(c))

	d := [3]string{"hello", "world"}
	fmt.Println(d, d[2], len(d))
	fmt.Println(d[2] == "") //true

	//비직관적임
	for i := range arr {
		fmt.Println(i)
	}

	//idx:인덱스 val: value
	for idx, val := range arr {
		fmt.Println(idx, val)
	}
	//slice/////////////////////////

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
	//용량 생력가능 그럼 같은 값이라고 생각하면됨

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

	var slice3 []int           //slice 기본값이  nill
	fmt.Println(slice3)        //[] 빈배열
	fmt.Println(slice3 == nil) // true
	// fmt.Println(slice3[0])     //ERROR

	//slice 바로 만드는 방법
	//배열과 똑같이 만들어주데 앞에 길이 생략
	slice4 := []int{1, 2, 3, 4}
	fmt.Println(slice4)

	for idx, val := range slice4 {
		fmt.Println(idx, val) //0 1 / 1 2 / 2 3 / 3 4
	}

	//map/////////////////////////

	var map1 map[string]int  //
	fmt.Println(map1 == nil) //true
	//array => 값지정하면 0
	//slice, map => nil로 초기화

	map2 := make(map[string]int)
	fmt.Println(map2 == nil) //false
	fmt.Println(len(map2))   //0
	// fmt.Println(map2, len(map2), cap(map2))
	//cap은 맵에 대해서 사용할수없음
	fmt.Println(map2, len(map2))
	//map[] 0

	map2["key1"] = 10
	map2["key2"] = 20
	fmt.Println(map2, len(map2))
	//map[key1:10 key2:20] 2
	fmt.Println(map2["key2"]) //20
	fmt.Println(map2["key3"]) //0
	//없는 키 조회할 경우 => value 해당하는 0 리턴

	val, ok := map2["key2"]
	fmt.Println(val, ok) //20, true
	//실제 없는거랑 0이랑 비교
	val, ok = map2["key3"]
	fmt.Println(val, ok) //0, false

	//map 바로 만드는 방법
	map3 := map[string]int{
		"key1": 100,
		"key2": 200,
	}
	fmt.Println(map3)

	//map struct 가능
	// map4 := map[User]int{
	// 	User{}:
	// }

	//맵은 순서가 없댜...
	for key, val := range map3 {
		fmt.Println(key, val)
	}

}
