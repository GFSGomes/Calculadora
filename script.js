const display = document.querySelector("input");
const textarea = document.querySelector("textarea");

const characters = ["CA", "C", "(", ")", "7", "8", "9", "/", "6", "5", "4", "*", "1", "2", "3", "-", ".", "0", "=", "+"];

var lastestAnswer = null;

function buttonClick(character)
{
	switch (character)
	{
		case "CA": 
			display.value = 0; 
			break;

		case "C": 
			display.value.length > 1 ?
				display.value = display.value.slice(0,-1) :
				display.value = 0;
			break;

		case "=":
			let displayText = display.value;
			display.value = eval(display.value);
			lastestAnswer = display.value;
			display.classList.add("result");

			textarea.value += `\n${displayText} = ${lastestAnswer}`;
			textarea.scrollTop = textarea.scrollHeight;
			break;

		default:
				if (lastestAnswer != null){
					display.value = character;
					lastestAnswer = null;
					display.classList.remove("result");
					break;
				}

				if (display.value.length == 1)
				{
					if (display.value == "0"){
						display.value = character;
					}
					else {
						display.value += character;
					}
				}
				else 
				{
					display.value += character;
				}
			break;
			
	}
}

// Creates the numpad:
characters.map((character) => 
{
	const numpad = document.querySelector("#numpad");

	const button = document.createElement("button");

	button.innerText = `${character}`;

	button.addEventListener("click", () => buttonClick(character));

	numpad.appendChild(button);
})