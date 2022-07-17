let students = {
	js: [{
		name: 'John',
		progress: 100,
	},{
		name:'Ivan',
		progress: 60,
	}],

	html: {
		basic: [{
			name: 'Peter',
			progress: 20,
		}, {
			name: 'Ann',
			progress: 18
		}],
		pro : [{
			name: 'Sam',
			progress: 10,
		}],

		semi: {
			students: [{
				name: 'Test',
				progress: 100
			}]
		}
	}
};

function getTotalProgressByIteration(data){
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)){
		if (Array.isArray(course)){
			students += course.length;
			course.forEach(item => {
				total += item.progress;
			})
		} else {
			for (let i of Object.values(course)){
				if (Array.isArray(i)){
					students += i.length;
					i.forEach(item => {
						total += item.progress;
					})}
			}
		}
	}

	return  total/students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
	if (Array.isArray(data)){
		let total = 0;

		data.forEach(item => {
			total += item.progress;
		})
			return [total, data.length];
	} else {
		let total = [0, 0];

		for(let subData of Object.values(data)) {
			const subDataArr = getTotalProgressByRecursion(subData);
			total[0] += subDataArr[0];
			total[1] += subDataArr[1];
		}

		return total;
	}

}

function factorial(i) {
	if(typeof i != 'number' || !Number.isInteger(i)){
		 return "Ошибка";
	} else if(i < 1){
		 return 1;
	} else if(i == 1){
		 return i;
	} else 
	return i *  factorial(i - 1);
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);