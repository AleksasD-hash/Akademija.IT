const form = document.forms[0];
let transactionHistory = [];
let totalFunds = parseFloat(0);
const now = new Date();

form.addEventListener('submit', function (e) {
			e.preventDefault();
			let input = e.target.elements[0].value;
			let selection = e.target.elements[1].value;
			
	
			let output = null;
			if (selection == 'add' && input != null) {
				totalFunds = Number(totalFunds + input);
				output = now + '\n[📗' + input + '\nTotal funds: ' + totalFunds + ']';
			} else if (selection == 'take' && totalFunds >= input) {
				totalFunds = totalFunds - input;
				output = now + '\n[📙 ' + input + '\nTotal funds: ' + totalFunds + ']';
			} else {
				output = now + '\n[📓 transaction declined...\n Total funds = ' + totalFunds + ']';
			}
			transactionHistory.push(output);
			localStorage.setItem('log', JSON.stringify(transactionHistory));
			localStorage.getItem('log');
});