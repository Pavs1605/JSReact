const heading = React.createElement("h1", { id: "heading" }, "hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const divParent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Nested h1 div"),
        React.createElement("h2", {}, "Nested h2 div"),
    ]

    )
);
root.render(divParent);

// const divSecondParent = React.createElement("div", { id: "secondParent" },
//     React.createElement("div", { id: "secondChild" }, [
//         React.createElement("h1", {}, "second  Nested h1 div"),
//         React.createElement("h2", {}, "second Nested h2 div"),
//     ]

//     )
// );
// root.render(divSecondParent);

// const newRoot = React.createElement("div", {id : "newRoot"}, [divParent, divSecondParent]);
// root.render(newRoot);