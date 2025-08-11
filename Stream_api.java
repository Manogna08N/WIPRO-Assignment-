package com.km;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Stream_api {

	public static void main(String[] args) {
		List<Integer> nums=Arrays.asList(2,15,1,5,10,7,22);
		Stream<Integer> data=nums.stream();
		
		nums.stream()
		.sorted()
		.map(n->n*4)
		.forEach(n->System.out.println(n));

	}
}
