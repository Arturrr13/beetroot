import axios from "axios";

const PresaleModules = {
	namespaced: true,
	actions: {
		fetchSelect(context){
			axios
			.get('https://node-api-6d27.onrender.com/api/select')
			.then(res => {
				function SortArray(x, y){
					if (x.country < y.country) {return -1;}
					if (x.country > y.country) {return 1;}
					return 0;
				}
				const selectData = res.data.sort(SortArray)
				context.commit("setSelectData", selectData)
			})
		},
		setLocalStorage(context){
			if(localStorage.UserData){
				const userData = JSON.parse(localStorage.getItem('UserData'))
				context.commit("updateUserData", userData)
			}
		}
	},
	mutations: {
		setSelectData(state, selectData){
			state.selectData = selectData
		},
		pushUserData(state, el){
			state.inputValues[el.elCheck] = el
		},
		updateUserData(state, UserData){
			Object.keys(state.inputValues).forEach(key => delete state.inputValues[key])
			state.inputValues = UserData
		},
		changeFormValidation(state, valid){
			state.formValidation = valid
		}
	},
	state: {
		selectData: [],
		inputValues: {},
		formValidation: false
	},
	getters:{
        getSelectData(state){
            return state.selectData
        },
		getInputValues(state){
			return state.inputValues
		},
		getFormValidation(state){
			return state.formValidation
		}
    },
}

export default PresaleModules