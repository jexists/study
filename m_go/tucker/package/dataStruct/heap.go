package dataStruct

import "fmt"

type Heap struct {
	list []int
}

func (h *Heap) Push(v int) {
	h.list = append(h.list, v)

	idx := len(h.list) - 1
	for idx >= 0 {
		parentIdx := (idx - 1) / 2
		if parentIdx < 0 {
			break
		}
		if h.list[idx] > h.list[parentIdx] {
			h.list[idx], h.list[parentIdx] = h.list[parentIdx], h.list[idx]
			idx = parentIdx
		} else {
			break
		}
	}

}

func (h *Heap) Print() {
	fmt.Println(h.list)
}

func (h *Heap) Pop int {
	if len(h.list) == 0 {
		return 0
	}

	top := h.list[0]
	last := h.list[len(h.list)-1]
	h.list = h.list[:len(h.list)-1]

	h.list[0] = last
	idx := 0

	for idx < len(h.list) {
		leftIdx := idx*2+1
		left := h.list[leftIdx]
		if leftIdx >= len(h.list) {
			break
		}
		rightIdx := idx*2+2
		right := h.list[rightIdx]
		if rightIdx >= len(h.list) {
			break
		}

		if left > last && left>=right {
			h.list[idx], h.list[leftIdx] = h.list[idx*2+1], h.list[idx]

			idx = leftIdx
		} else if right > last {
			h.list[idx], h.list[rightIdx] = h.list[rightIdx], h.list[idx]
			idx = rightIdx
		} else {
			break
		}
	}
}
