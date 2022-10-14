import EditorJS from "@editorjs/editorjs";
import ImageTool from "@editorjs/image";

const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: "editorjs",
  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: "http://127.0.0.1:8080/src/storeImages.js", // Your backend file uploader endpoint
          byUrl: "http://127.0.0.1:8080/src/storeImages.js", // Your endpoint that provides uploading by Url
        },
        uploader: {
          /**
           * Upload file to the server and return an uploaded image data
           * @param {File} file - file selected from the device or pasted by drag-n-drop
           * @return {Promise.<{success, file: {./src}}>}
           */
          uploadByFile(file) {
            // console.log(file);
            return MyAjax.upload(file).then(() => {
              return {
                success: 1,
                file: {
                  url: "https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg",
                  // any other image data you want to store, such as width, height, color, extension, etc
                },
              };
            });
          },
        },
      },
    },
  },
});
