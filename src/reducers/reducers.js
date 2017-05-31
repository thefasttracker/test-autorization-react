export const loginReducer = (state = [], action) => {
	switch (action.type) {
		case "LOGIN":
			return [
				...state,
				{
					user: action.payload.user,
					password: action.payload.password
				}
			];
		case "SIGNUP":
			return [
				...state,
				{
					name: action.payload.name,
					surename: action.payload.surename,
					username: action.payload.username,
					age: action.payload.age,
					sex: action.payload.sex
				}
			];
		default:
			return state;
	}
};