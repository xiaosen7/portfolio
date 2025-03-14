import { Md5HashCalculator } from "@shared/hash";
import { readBlob } from "../../chunks";

self.onmessage = async (e) => {
  try {
    const chunks = e.data as Blob[];

    const calculator = new Md5HashCalculator();

    const total = chunks.length;

    for (let index = 0; index < chunks.length; index++) {
      const chunk = chunks[index];
      const buffer = await readBlob(chunk);
      calculator.append(buffer);

      self.postMessage({
        progress: ((index + 1) / total) * 100,
      });
    }

    self.postMessage({
      progress: 100,
      hash: calculator.end(),
    });
  } catch (error) {
    self.postMessage({
      error,
    });
  } finally {
    self.close();
  }
};
