package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Result struct {
	strikes int
	balls   int
}

func main() {
	rand.Seed(time.Now().UnixNano())
	//무작위 숫자 3개를 만든다.
	numbers := MakeNumbers()

	cnt := 0
	for {
		cnt++
		//사용자의 입력을 받는다.
		inputNumbers := InputNumbers()

		//결과를 비교한다.
		result := CompareNumbers(numbers, inputNumbers)

		PrintResult(result)

		//3s 인가?
		if IsGameEnd(result) {
			//게임끝
			break
		}
	}

	//게임 몇 번 만에 끝낱는지 출력
	fmt.Printf("%d 번 만에 맞췄습니다.\n", cnt)
}

func MakeNumbers() [3]int {
	//0~9 사이의 겹치지 않는 무작위 숫자 3개를 출력
	var rst [3]int

	for i := 0; i < 3; i++ {
		for {
			n := rand.Intn(10)
			duplicated := false
			for j := 0; j < i; j++ {
				if rst[j] == n {
					//겹치면 다시 뽑기
					duplicated = true
					break
				}
			}
			if !duplicated {
				rst[i] = n
				break
			}
			if rst[0] == 0 {
				duplicated = true
				continue
			}
		}
	}

	//fmt.Println(rst)
	return rst
}

func InputNumbers() [3]int {
	//키보드로부터 0~9 사이의 겹치지 않는 수 3개를 반환
	var rst [3]int
	for {
		fmt.Println("겹치지 않게 0~9의 정수 3개를 입력해 주세요")
		var no int
		_, err := fmt.Scanf("%d\n", &no)
		//버퍼 값의 엔터값을 없애는 법은 \n!! 엔터값이 남아서 다시 로드되는 현상 방지//
		if err != nil {
			fmt.Println("잘못 입력하셨습니다.")
			continue
		}

		success := true
		idx := 0
		for no > 0 {
			n := no % 10
			no = no / 10
			duplicated := false
			for j := 0; j < idx; j++ {
				if rst[j] == n {
					//겹치면 다시 뽑기
					duplicated = true
					break
				}
			}
			if duplicated {
				fmt.Println("숫자가 겹치지 않아야 합니다.")
				success = false
				break
			}

			if idx >= 3 {
				fmt.Println("3개보다 많은 숫자를 입력하셨습니다.")
				success = false
				break
			}

			rst[idx] = n
			idx++
		}
		if success && idx < 3 {
			fmt.Println("3개의 숫자를 입력하세요.")
			success = false
		}

		if !success {
			continue
		}
		break
	}
	rst[0], rst[2] = rst[2], rst[0]
	//첫 번째는 두 번째랑 바뀌고 세 번째는 첫 번째랑 바뀌는 형태
	fmt.Println(rst)
	return rst
}

func CompareNumbers(numbers, inputNumbers [3]int) Result {
	// 두 개의 숫자 3개를 비교해서 결과를 반환한다.
	strikes := 0
	balls := 0

	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			if numbers[i] == inputNumbers[j] {
				if i == j {
					strikes++
				} else {
					balls++
				}
				break
			}
		}
	}

	return Result{strikes, balls}
}

func PrintResult(result Result) {
	fmt.Printf("%dS%dB\n", result.strikes, result.balls)
}

func IsGameEnd(result Result) bool {
	//비교 결과가 3 스트라이크 인지 확인
	return result.strikes == 3
}
