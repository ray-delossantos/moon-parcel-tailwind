import Moon from "moon";
import Main from "./main/Main";

Moon.use({
	data: Moon.data.driver({
		name: "moon"
	}),
	view: Moon.view.driver("#root")
});

Moon.run(({ data }) => ({
	view: {} //(<Main data={data}/>)
}));
