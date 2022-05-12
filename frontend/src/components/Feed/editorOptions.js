const editorOptions = {
  modules: {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote"],

        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }],
        [{ align: "right" }][{ size: ["small", false, "large", "huge"] }], // text direction // custom dropdown
      ],
    },
  },
  placeholder: "פרסם כאן את הדיווח",
};

export default editorOptions;
