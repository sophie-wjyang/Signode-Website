// "counters" is a reference to all elements with the class "value"
let counters = document.querySelectorAll(".value");
const time = 5000; // 5000 milliseconds

counters.forEach((counter) => {
	const animate = () => {
        // get end value that we stop at
		const value = +counter.getAttribute("end-val");
		console.log("value: " + value);

		// increment_speed is how much we increment the number by every period
        const increment_speed = value/time;
		console.log("increment speed: " + increment_speed);

        // get current rendered value
		const data = +counter.innerText;
		console.log("data: " + data);

        // if we haven't reached the end value yet, 
		if (data < value) {
			counter.innerText = Math.ceil(data + increment_speed);
			console.log("innertext: " + counter.innerText);
			setTimeout(animate, time/value);
		} 

        // stay at end value once we've reached it
        else {
			counter.innerText = value;
		}
	};

	animate();
});
