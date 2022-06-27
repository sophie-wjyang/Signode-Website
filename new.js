// "counters" is a reference to all elements with the class "value"
let counters = document.querySelectorAll(".value");
const time = 5000; // 5000 milliseconds

counters.forEach((counter) => {
	const animate = (data) => {
        // get end value that we stop at
        const value = +counter.getAttribute("end_val"); // "+" gives the numerical value of the HTML text

        // increment_speed is how much we increment the number by every period
        const increment_speed = value/time;
        console.log("endval: " + value + ", data: " + data);

        // if we haven't reached the end value yet 
        if(data < value) {
            // update display value to be the 
            counter.innerText = Math.floor(data + increment_speed);
            
            // increment data
            data += increment_speed;

            // call function with recursion every millisecond
            setTimeout(animate(data), 1);
        }

        // stay at end value once we've reached it
        else{
            counter.innerText = value;
        }
    }

    // call function with an initial data value of 0
    animate(0);
});


