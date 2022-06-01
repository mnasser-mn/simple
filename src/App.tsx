import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { AppRouter } from "./app-router";
import { errorHandler } from "./redux-setup/reducers/error-handler";
import { jobReducer } from "./redux-setup/reducers/job-reducer";
import { skillReducer } from "./redux-setup/reducers/skill-reducer";
const store = configureStore({
    reducer:{
        jobs:jobReducer,
        skills:skillReducer,
        error:errorHandler
    },
})


export const App = ()=>(


<Provider store={store}>

<AppRouter/>
</Provider>
)

export default App;