module.exports = function myplugin() {
  return {
    visitor: {
      Identifier(path) {
        // 해당 메소드에 코드 조각이 전달.
        const name = path.node.name;

        console.log("Identifier() name:", name);

        // path.node.name = name.split("").reverse().join("");
      },
      VariableDeclaration(path) {
        console.log("VariableDeclaration() kind:", path.node.kind); // const

        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
    },
  };
};
