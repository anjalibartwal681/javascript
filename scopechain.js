


//scope chaining

//  JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain.
// Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope).
// This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.


// Global letiable
let globalvar= 20;

function scopefun() {
	// Local letiable
	let local_var = 30;

	let localfun  = function () {

		// Display the value inside the local letiable
		console.log(local_var);
	}

	let functionscope = function () {

		// Displays the value inside the global letiable
		console.log(globalvar);
	}

	localfun();
	functionscope();
}

scopefun();
