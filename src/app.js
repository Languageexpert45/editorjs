import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';


const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: 'editorjs',
  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: '', // Your backend file uploader endpoint
          byUrl: '', // Your endpoint that provides uploading by Url
        }
      }
    }
  },
});