const editor = document.querySelector("#code");
hljs.configure({ ignoreUnescapedHTML: true });
hljs.highlightElement(editor);

const highlight = (editor) => {
  delete editor.dataset["highlighted"];
  hljs.highlightElement(editor);
};

const options = {
  tab: " ".repeat(2),
  indentOn: /[(\[]$/,
  addClosing: false,
};

const jar = CodeJar(editor, highlight, options);
