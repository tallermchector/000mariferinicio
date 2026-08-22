import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/assets/css")],
  },
};