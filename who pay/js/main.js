
new Vue({
	el: '#app',

	data: {
		state: true,
		inputName: '',
		names: [],
		showError: false,
		result: null
	},

	methods: {
		addNameToList() {
			if (this.validate(this.inputName)) {
				this.names.push(this.inputName);
				this.inputName = '';
				this.showError = false;
			} else {
				console.log('Its not valid');
				this.showError = true;
			}
		},
		validate(value) {
			if (value) {
				return true;
			} else {
				return false;
			}
		},
		deleteUser(userIndex) {
			this.names.splice(userIndex, 1);
		},
		showResults() {
			const random = this.names[Math.floor(Math.random() * this.names.length)];
			this.result = random;
		
			this.state = false;
		},
		resetApp() {
			this.state = true;
			this.names = [];
			this.result = null;
		}
	}
});
