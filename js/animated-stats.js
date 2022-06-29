// "counters" is an array of all elements with the class "value"
let counters = document.querySelectorAll(".value");

const duration = 5000;

counters.forEach((counter) => {
	const animate = () => {
        // get end value that we stop at
		const value = +counter.getAttribute("end_val");

        // get current rendered value
		const data = +counter.innerText;
        console.log("-endval: " + value + ", data: " + data);

		// how frequently we update the displayed number
		const period = duration/value;
        console.log("period: " + period);


        // if we haven't reached the end value yet, keep incrementing
		if (data < value) {
			counter.innerText = data + 1;
			// call animate() recursively
			setTimeout(animate, period);
		} 

        // stay at end value once we've reached it
        else {
			counter.innerText = value;
		}
	};

	animate();
});
