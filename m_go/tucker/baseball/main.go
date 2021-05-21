package main

import "fmt"

func main() {
	// 무작위 숫자 3개 만들기
	numbers := MakeNumebers()

	cnt := 0

	for {
		cnt++
		// 사용자의 입력
		inputNubers := InputNubers()

		// 결과 비교
		result := CompareNumbers(numbers, inputNubers)

		PrintResult(result)

		if IsGameEnd(result) {
			// 게임끝
			break
		}
	}

	// 게임끝 결과
	fmt.Printf("%d 번만에 맞췄습니다. \n", cnt)
}
